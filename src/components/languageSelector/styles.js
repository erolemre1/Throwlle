import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  input: {
    height: 50, 
    width: 200, 
    maxWidth: 350,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    marginBottom: 15, 
    paddingLeft: 15, 
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3CB371',
    width:150,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonSignUp : {
    borderWidth: 2,
    width:150,
    borderColor: '#3CB371',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginBlock: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  forgetPassword: {
    font:12,
    color: '#fff',
    fontWeight: '600',
    marginTop: -18,
    marginLeft: 98,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
inputContainer : {
  alignSelf: 'center'

},
languageSelector: {
  position: 'absolute',
  top: 10, 
  right: 10,
  zIndex: 10, 
},
flag: {
  width: 40,
  height: 30,
  resizeMode: 'contain',
  margin: 0,     
  padding: 0,
},
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '30%',     
  width: '80%',
},

modalItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingVertical: 10,
  width: '100%',
},

modalText: {
  fontSize: 16,
  marginLeft: 10,
  color: '#000',
},
});
