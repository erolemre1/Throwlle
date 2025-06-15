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
  alignSelf: 'center',
},
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 18,
    marginVertical: 10,
    color: 'red',
  },
  modalButton: {
    backgroundColor: '#3CB371',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
    marginBottom:10
  },
  modalInput: {
    height: 50,
    width: 200,
    maxWidth: 350,
    borderColor:  "#3CB371",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'center', 
  },
  modalSuccessText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
