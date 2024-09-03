import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

type Props = {
  navigation?: any;
};

const Splash = ({navigation, ...props}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logotext}> Todo List </Text>
    </SafeAreaView>
  );
};

export default Splash;
