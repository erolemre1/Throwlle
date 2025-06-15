import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Modal } from 'react-native';
import { styles } from './styles';
import i18n from '../../../i18n';

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState(''); 
  const [sentCode, setSentCode] = useState('');
  const [timer, setTimer] = useState(120);
  const [newPasswordModalVisible, setNewPasswordModalVisible] = useState(false); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  useEffect(() => {
    let interval;

    if (modalVisible && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); 
    }

    if (timer === 0) {
      clearInterval(interval);
      setModalVisible(false);
      Alert.alert(i18n.t('expiredCode'));
    }

    return () => clearInterval(interval); 
  }, [modalVisible, timer]);

  const handleSignUp = async () => {
    if (username === '') {
      setError(i18n.t('errorEmailRequired'));
    } else {
      setError('');
      const generatedCode = Math.floor(1000 + Math.random() * 9000); 
      setSentCode(generatedCode.toString()); 

      try {
        const response = await fetch('http://192.168.1.103:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'gulecemre626@gmail.com',
            subject: 'Şifre yenilemeniz için kodunuz',
            message: `Kodunuz: ${generatedCode}`, 
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setModalVisible(true); 
          setTimer(120); 
          Alert.alert(i18n.t('codeSentSuccess'));
        } else {
          Alert.alert(i18n.t('error'), data.error || 'Gönderilemedi.');
        }
      } catch (error) {
        Alert.alert(i18n.t('error'), 'Sunucuya ulaşılamadı.');
      }
    }
  };

  const handleVerifyCode = () => {
    if (code === sentCode) {
      Alert.alert(i18n.t('success'), i18n.t('codeVerification'), [
        { text: `${i18n.t('goToLogin')}`, onPress: () => {
          setModalVisible(false); 
          setNewPasswordModalVisible(true);
        } }
      ]);
    } else {
      Alert.alert(i18n.t('error'), i18n.t('codeError'));
    }
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      Alert.alert(i18n.t('success'), i18n.t('passwordChanged'), [
        { text: `${i18n.t('goToLogin')}`, onPress: () => {
          setNewPasswordModalVisible(false);
          setNewPassword('');
          setConfirmPassword('');
          navigation.navigate('Anasayfa');
        } }
      ]);
    } else {
      Alert.alert(i18n.t('error'), i18n.t('passwordsDontMatch'));
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('resetPassword')}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{i18n.t('email')}</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('emailPlaceholder')}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>{i18n.t('sendCodeButton')}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{i18n.t('codeVerification')}</Text>
            <TextInput
              style={styles.modalInput}
              placeholder={i18n.t('enterCode')}
              value={code}
              onChangeText={setCode}
              keyboardType="numeric"
            />
            <Text style={styles.timerText}>{i18n.t('remainingTime')}: {formatTime(timer)}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleVerifyCode}>
              <Text style={styles.buttonText}>{i18n.t('verifyButton')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>{i18n.t('closeButton')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={newPasswordModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setNewPasswordModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{i18n.t('newPassword')}</Text>
            <TextInput
              style={styles.modalInput}
              placeholder={i18n.t('newPasswordPlaceholder')}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.modalInput}
              placeholder={i18n.t('confirmPasswordPlaceholder')}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleChangePassword}>
              <Text style={styles.buttonText}>{i18n.t('changePasswordButton')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setNewPasswordModalVisible(false)}
            >
              <Text style={styles.buttonText}>{i18n.t('closeButton')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

