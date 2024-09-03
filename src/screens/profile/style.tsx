import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  ProfileText: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: '4%',
    fontFamily: 'FiraCode',
  },
  inputContainer: {
    width: width * 0.7,
    padding: 10,
    borderRadius: 5,
    marginVertical: '4%',
    height: 40,
    borderWidth: 1,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: '5%',
  },
  AccountDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: '25%',
    marginBottom: '5%',
  },
  AccountDetails: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    fontFamily: 'FiraCode',
  },
  saveBtn: {
    borderRadius: 5,
    width: width * 0.7,
    marginVertical: '3%',
  },
  saveBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: '5%',
  },
  light: {
    mainContainer: {
      backgroundColor: '#FFFFFF',
    },
    ProfileText: {
      color: '#210203',
    },
    inputContainer: {
      backgroundColor: '#FFFFFF',
      borderColor: '#BFBFBF',
    },
    imageStyle: {
      backgroundColor: '#4B4851',
    },
    textStyle: {
      color: '#4B4851',
    },
    saveBtn: {
      backgroundColor: '#4B4851',
    },
    saveBtnText: {
      color: '#FFFFFF',
    },
    placeholderTextColor: '#8C8C8C',
  },
  dark: {
    mainContainer: {
      backgroundColor: '#000000',
    },
    ProfileText: {
      color: '#FFFFFF',
    },
    inputContainer: {
      backgroundColor: '#333333',
      borderColor: '#444444',
    },
    imageStyle: {
      backgroundColor: '#4B4851',
    },
    textStyle: {
      color: '#FFFFFF',
    },
    saveBtn: {
      backgroundColor: '#1A73E8',
    },
    saveBtnText: {
      color: '#FFFFFF',
    },
    textColor: '#ffffff',
    placeholderTextColor: '#AAAAAA',
  },
});

export default styles;
