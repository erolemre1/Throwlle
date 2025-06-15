import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ImageBackground, Modal } from 'react-native';
import { styles } from './styles';
import i18n from '../../../i18n';

const HomeScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [sentCode, setSentCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [timer, setTimer] = useState(120);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let interval;
    if (modalVisible && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      clearInterval(interval);
      setModalVisible(false);
      Alert.alert(i18n.t('expiredCode'));
    }
    return () => clearInterval(interval);
  }, [modalVisible, timer]);



  const handleVerifyCode = async () => {
    if (enteredCode !== sentCode) {
      Alert.alert(i18n.t('error'), i18n.t('codeError'));
      return;
    }

    try {
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const users = snapshot.val();
        const isDuplicate = Object.values(users).some(
          (user: any) => user.email === email || user.phone === phone
        );

        if (isDuplicate) {
          Alert.alert(
            i18n.t('error'),
            i18n.t('duplicateUser') || 'Bu e-posta veya telefon numarası zaten kullanılıyor.'
          );
          return;
        }
      }

      const userData = {
        fullName,
        email,
        phone,
        password,
      };

      const newUserRef = push(usersRef);
      await set(newUserRef, userData);

      setSuccessMessage('basarılı!');

      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Anasayfa');
      }, 2000);
    } catch (e) {
      console.error('Firebase  hata:', e);
    }
  };

  const handleSignUp =  () => {

  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (

      <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('title')}</Text>
        <Text style={styles.subtitle}>{i18n.t('subtitle')}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{i18n.t('fullName')}</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('fullName')}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{i18n.t('email')}</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{i18n.t('phone')}</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('phone')}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{i18n.t('password')}</Text>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('password')}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>{i18n.t('signUp')}</Text>
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
              value={enteredCode}
              onChangeText={setEnteredCode}
              keyboardType="numeric"
            />
            <Text style={styles.timerText}>
              {i18n.t('remainingTime')}: {formatTime(timer)}
            </Text>

            {successMessage !== '' && (
              <Text style={[styles.modalSuccessText, { color: 'green', marginVertical: 10 }]}>
                {successMessage}
              </Text>
            )}

            <TouchableOpacity style={styles.modalButton} onPress={handleVerifyCode}>
              <Text style={styles.buttonText}>{i18n.t('verifyButton')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>{i18n.t('closeButton')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>

  );
};

export default HomeScreen;
