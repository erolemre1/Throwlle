import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
  StatusBar,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const PostScreen = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const loadUserData = async () => {
    try {
      const userDataStr = await AsyncStorage.getItem('user');
      if (userDataStr) {
        const userData = JSON.parse(userDataStr);
        setUserEmail(userData.email || '');
      }
    } catch (error) {
      console.log( error);
    }
  };

  useEffect(() => {
    loadUserData();
    getCurrentLocation();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Konum Erişimi Gerekli',
            message: 'Bu uygulama konum bilgisine ihtiyaç duyuyor.',
            buttonNeutral: 'Daha Sonra Sor',
            buttonNegative: 'İptal',
            buttonPositive: 'Tamam'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        Alert.alert('Konum Hatası', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
        showLocationDialog: true
      }
    );
  };

  const handlePost = () => {
    const now = new Date();
  
    const formattedDate = now.getDate().toString().padStart(2, '0') + '/' +
                          (now.getMonth() + 1).toString().padStart(2, '0') + '/' +
                          now.getFullYear();
  
    const formattedTime = now.getHours().toString().padStart(2, '0') + ':' +
                          now.getMinutes().toString().padStart(2, '0');
  
    Alert.alert(
      'Post Paylaşıldı',
      `Kullanıcı: ${userEmail}\n` +
      `Açıklama: ${description}\n` +
      `Konum: ${location?.latitude}, ${location?.longitude}\n` +
      `Tarih: ${formattedDate} ${formattedTime}`
    );
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Text style={styles.title}>Yeni Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Ne paylaşmak istersin?"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      {location && (
        <Text style={styles.location}>
          📍 {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Paylaş</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostScreen;
