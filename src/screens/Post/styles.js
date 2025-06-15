import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      height: 120,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 12,
      textAlignVertical: 'top',
      borderRadius: 8,
      marginBottom: 16,
    },
    location: {
      marginBottom: 16,
      color: '#555',
    },
    button: {
      backgroundColor: '#28a745',
      paddingVertical: 14,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default styles;
