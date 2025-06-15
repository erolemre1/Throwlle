import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import styles from './styles';
import LanguageSelector from '../../components/languageSelector';
import i18n from '../../../i18n'; 

const mockPosts = [
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '1',
    user: 'emre@gmail.com',
    description: 'Bugün çok güzel bir gün!',
    location: { latitude: 40.7128, longitude: -74.006 },
    dateTime: '16/05/2025 14:35',
  },
  {
    id: '2',
    user: 'ayse@gmail.com',
    description: 'Yeni kahvemi deniyorum ☕',
    location: { latitude: 41.0082, longitude: 28.9784 },
    dateTime: '15/05/2025 09:12',
  },
  {
    id: '3',
    user: 'ali@gmail.com',
    description: 'Haftasonu tatili başlasın!',
    location: { latitude: 39.9334, longitude: 32.8597 },
    dateTime: '14/05/2025 18:45',
  },
  {
    id: '4',
    user: 'fatma@gmail.com',
    description: 'Doğa yürüyüşü için harika bir gün 🌲',
    location: { latitude: 38.4237, longitude: 27.1428 },
    dateTime: '13/05/2025 08:30',
  },
];

const PostCard = ({ post }) => (
  <View style={styles.card}>
    <Text style={styles.user}>{post.user}</Text>
    <Text style={styles.description}>{post.description}</Text>
    <Text style={styles.location}>
      📍 {post.location.latitude.toFixed(4)}, {post.location.longitude.toFixed(4)}
    </Text>
    <Text style={styles.dateTime}>{post.dateTime}</Text>
  </View>
);

const PostListScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);
  const [language, setLanguage] = useState(i18n.language); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (search.trim() === '') {
        setFilteredPosts(mockPosts);
      } else {
        const filtered = mockPosts.filter(post =>
          post.description.toLowerCase().includes(search.toLowerCase()) ||
          post.user.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
      setLoading(false);
    }, 500);
  }, [search]);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paylaşılan Postlar</Text>

      <TextInput
        placeholder="Ara (açıklama, kullanıcı)..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={() => Keyboard.dismiss()}
        clearButtonMode="while-editing"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#28a745" style={{ marginTop: 30 }} />
      ) : filteredPosts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Gösterilecek post bulunamadı.</Text>
        </View>
      ) : (
        <>
          <FlatList
            ref={flatListRef}
            data={filteredPosts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PostCard post={item} />}
            contentContainerStyle={{ paddingBottom: 30 }}
          />

          <TouchableOpacity style={styles.scrollTopButton} onPress={scrollToTop}>
            <Text style={styles.scrollTopButtonText}>⬆</Text>
          </TouchableOpacity>
        </>
      )}
      <LanguageSelector setLanguage={setLanguage} />
    </View>
  );
};

export default PostListScreen;

