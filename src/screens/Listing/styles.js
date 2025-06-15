import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7f7',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 12,
    alignSelf: 'center',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  user: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: '#888',
    marginBottom: 6,
  },
  dateTime: {
    fontSize: 12,
    color: '#bbb',
    fontStyle: 'italic',
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
  scrollTopButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#28a745',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  scrollTopButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});


export default styles;
