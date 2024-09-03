import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addTodoItem, getTodoItems, updateTodoItem} from '../../../helper';
import CustomInput from '../../components/input/CustomInput';
import styles from './style';
import CustomButton from '../../components/buttons/CustomButton';
import {useTheme} from '../../theme/ThemeProvider';
import Toast from 'react-native-toast-message';

type TodoItem = {
  id: string;
  title: string;
  done: boolean;
};

function Todo(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {theme, toggleTheme} = useTheme();

  const dynamicStyles = theme === 'light' ? styles.light : styles.dark;

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [newTodoItem, setNewTodoItem] = useState('');
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');

  useEffect(() => {
    getTodoItems(0, 10).then(items => setTodoItems(items));
  }, []);

  const handleUpdate = async () => {
    if (selectedTodo && updatedTitle) {
      try {
        await updateTodoItem({...selectedTodo, title: updatedTitle});
        setModalVisible(false);
        setUpdatedTitle('');
        setSelectedTodo(null);
        getTodoItems(0, 10).then(items => setTodoItems(items));
      } catch (error) {
        console.error('Error updating todo item:', error);
      }
    }
  };

  return (
    <SafeAreaView
      style={[styles.backgroundStyle, dynamicStyles.backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={[
          styles.backgroundStyle,
          dynamicStyles.backgroundStyle,
        ]}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.backgroundStyle, dynamicStyles.backgroundStyle]}>
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
            TODO
          </Text>
        </View>
        <View style={[styles.addTodoContainer, dynamicStyles.addTodoContainer]}>
          <CustomInput
            placeholder="add your todo item"
            style={[styles.inputContainer, dynamicStyles.inputContainer]}
            value={newTodoItem}
            onChangeText={text => setNewTodoItem(text)}
            placeholderTextColor={dynamicStyles.placeholderTextColor}
            textColor={dynamicStyles.textColor}
          />
          {/* onChange={e => setNewTodoItem(e.nativeEvent.text)} */}
          <CustomButton
            type="add"
            style={[styles.addBtnStyle, dynamicStyles.addBtnStyle]}
            textStyle={[styles.addBtnTextStyle, dynamicStyles.addBtnTextStyle]}
            onSubmit={async () => {
              if (newTodoItem.trim().length === 0) {
                Alert.alert('Please enter a todo item');
                return;
              }

              try {
                await addTodoItem(newTodoItem);
                const items = await getTodoItems(0, 10);
                setTodoItems(items);
                setNewTodoItem('');

                Toast.show({
                  type: 'success',
                  text1: 'Todo Added',
                  text2: 'Your todo item was added successfully',
                });
              } catch (error) {
                console.error('Error adding todo item:', error);

                Toast.show({
                  type: 'error',
                  text1: 'Error',
                  text2:
                    'There was a problem adding your todo item. Please try again.',
                });
              }
            }}
          />
        </View>
        <View style={[styles.sectionContainer, dynamicStyles.sectionContainer]}>
          {todoItems.map((item: TodoItem) => (
            <View
              key={item.id}
              style={[styles.todoList, dynamicStyles.todoList]}>
              <Text
                style={[
                  styles.sectionDescription,
                  dynamicStyles.sectionDescription,
                ]}>
                {item.title}
              </Text>
              <CustomButton
                style={[styles.addBtnStyle, dynamicStyles.addBtnStyle]}
                textStyle={[
                  styles.addBtnTextStyle,
                  dynamicStyles.addBtnTextStyle,
                ]}
                type="edit"
                onSubmit={() => {
                  setSelectedTodo(item);
                  setUpdatedTitle(item.title);
                  setModalVisible(true);
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal for updating TODO */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={[styles.modalContainer, dynamicStyles.modalContainer]}>
          <View style={[styles.modalContent, dynamicStyles.modalContent]}>
            <TextInput
              style={[styles.modalInput, dynamicStyles.modalInput]}
              value={updatedTitle}
              onChangeText={setUpdatedTitle}
              placeholder="Update title"
            />
            <Button title="Save" onPress={handleUpdate} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Todo;
