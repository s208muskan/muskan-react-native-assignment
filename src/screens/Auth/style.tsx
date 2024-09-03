import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3B99F',
  },
  logotext: {
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 1,
    fontFamily: 'FiraCode',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: '5%',
    fontFamily: 'FiraCode',
  },
  inputContainer: {
    width: width * 0.7,
    padding: 10,
    borderRadius: 5,
    marginVertical: '3%',
    height: 40,
    borderWidth: 1,
    borderColor: '#A7AAAB',
  },
  inputStylePassword: {
    height: 40,
    width: width * 0.6,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#A7AAAB',
    borderBottomColor: '#A7AAAB',
    borderLeftColor: '#A7AAAB',
  },
  eyeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    paddingHorizontal: '2%',
    borderBottomRightRadius: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#A7AAAB',
    borderBottomColor: '#A7AAAB',
    borderRightColor: '#A7AAAB',
  },
  forgotPasswordContainer: {
    width: width * 0.7,
    marginBottom: '6%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: '2%',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontFamily: 'FiraCode',
    letterSpacing: 1,
  },
  loginBtn: {
    borderRadius: 5,
    width: width * 0.7,
  },
  loginBtnText: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'FiraCode',
  },
  GoogleTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: '2%',
    fontFamily: 'FiraCode',
  },
  orText: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: '3%',
    fontFamily: 'FiraCode',
  },
  light: {
    mainContainer: {
      backgroundColor: '#fff',
    },
    loginText: {
      color: '#210203',
    },
    inputContainer: {
      backgroundColor: '#fff',
    },
    inputStylePassword: {
      backgroundColor: '#fff',
    },
    eyeIcon: {
      backgroundColor: '#fff',
    },
    placeholderTextColor: '#8C8C8C',
    forgotPasswordText: {
      color: '#210203',
    },
    loginBtn: {
      backgroundColor: 'black',
    },
    loginBtnText: {
      color: '#fff',
    },
    GoogleTextStyle: {
      color: '#210203',
    },
    orText: {
      color: '#210203',
    },
    googleIconColor: '#210203',
  },
  dark: {
    mainContainer: {
      backgroundColor: '#000',
    },
    loginText: {
      color: '#FFFFFF',
    },
    inputContainer: {
      backgroundColor: '#333333',
    },
    inputStylePassword: {
      backgroundColor: '#333333',
    },
    eyeIcon: {
      backgroundColor: '#333333',
    },
    textColor: '#ffffff',
    placeholderTextColor: '#fff',
    forgotPasswordText: {
      color: '#FFFFFF',
    },
    loginBtn: {
      backgroundColor: '#1A73E8',
    },
    loginBtnText: {
      color: '#FFFFFF',
    },
    GoogleTextStyle: {
      color: '#FFFFFF',
    },
    orText: {
      color: '#FFFFFF',
    },
    googleIconColor: '#FFFFFF',
  },
});
