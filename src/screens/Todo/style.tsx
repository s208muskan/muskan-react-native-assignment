import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'FiraCode',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'FiraCode',
  },
  highlight: {
    fontWeight: '700',
  },
  addTodoContainer: {
    marginVertical: '5%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: width * 0.7,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 40,
    borderWidth: 1,
  },
  addBtnStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 12,
  },
  addBtnTextStyle: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'FiraCode',
  },
  todoItem: {
    fontSize: 18,
    fontWeight: '400',
    borderBottomWidth: 1,
    padding: 8,
    borderBottomColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
  },
  modalInput: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: '#fff',
  },
  todoList: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: '3%',
  },
  light: {
    backgroundStyle: {
      backgroundColor: '#fff',
    },
    sectionContainer: {
      backgroundColor: '#ffffff',
    },
    sectionTitle: {
      color: '#210203',
    },
    sectionDescription: {
      color: '#333333',
    },
    inputContainer: {
      backgroundColor: '#ffffff',
      borderColor: '#A7AAAB',
    },
    addBtnStyle: {
      backgroundColor: '#A7AAAB',
    },
    addBtnTextStyle: {
      color: '#ffffff',
    },
    todoItem: {
      borderBottomColor: '#dddddd',
    },
    modalContent: {
      backgroundColor: '#ffffff',
    },
    modalInput: {
      borderBottomColor: '#A7AAAB',
      color: '#000',
    },
  },
  dark: {
    backgroundStyle: {
      backgroundColor: '#000000',
    },
    sectionContainer: {
      backgroundColor: '#000000',
    },
    sectionTitle: {
      color: '#ffffff',
    },
    sectionDescription: {
      color: '#cccccc',
    },
    inputContainer: {
      backgroundColor: '#333333',
      borderColor: '#444444',
    },
    addBtnStyle: {
      backgroundColor: '#1A73E8',
    },
    addBtnTextStyle: {
      color: '#ffffff',
    },
    todoItem: {
      borderBottomColor: '#555555',
    },
    modalContent: {
      backgroundColor: '#444444',
    },
    textColor: '#ffffff',
    placeholderTextColor: '#fff',
    modalInput: {
      borderBottomColor: '#666666',
    },
  },
});

export default styles;
