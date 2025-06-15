import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal, View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../../i18n';
import { styles } from './styles';

const LanguageSelector = ({ setLanguage }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('user-language');
        if (storedLanguage) {
          await i18n.changeLanguage(storedLanguage); 
          setLanguage(storedLanguage); 
        } else {
          await i18n.changeLanguage('en');
          setLanguage('en');
        }
      } catch (error) {
        console.error('Error  ', error);
        await i18n.changeLanguage('en');
        setLanguage('en');
      }
    };

    loadLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang); 
    await AsyncStorage.setItem('user-language', lang); 
    setLanguage(lang); 
    setModalVisible(false); 
  };

  return (
    <View style={styles.languageSelector}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image 
          source={
            i18n.language === 'tr' ? require('../../assets/flags/tr.png') :
            i18n.language === 'en' ? require('../../assets/flags/en.png') :
            i18n.language === 'ar' ? require('../../assets/flags/ar.png') :
            i18n.language === 'zh' ? require('../../assets/flags/zh.png') :
            i18n.language === 'ru' ? require('../../assets/flags/ru.png') :
            i18n.language === 'az' ? require('../../assets/flags/az.png') : 
            require('../../assets/flags/nl.png')
          }
          style={styles.flag}
        />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{i18n.t('language')}</Text>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('tr')}>
              <Image source={require('../../assets/flags/tr.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('turkish')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('az')}>
              <Image source={require('../../assets/flags/az.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('Azerbaijani')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('en')}>
              <Image source={require('../../assets/flags/en.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('english')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('ar')}>
              <Image source={require('../../assets/flags/ar.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('arabic')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('zh')}>
              <Image source={require('../../assets/flags/zh.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('chinese')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('ru')}>
              <Image source={require('../../assets/flags/ru.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('russian')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => changeLanguage('nl')}>
              <Image source={require('../../assets/flags/nl.png')} style={styles.flag} />
              <Text style={styles.modalText}>{i18n.t('flemish')}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default LanguageSelector;
