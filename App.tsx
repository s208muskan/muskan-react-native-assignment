import React, {useEffect} from 'react';
import Router from './src/navigation/Router';
import Toast from 'react-native-toast-message';
import {firebase} from '@react-native-firebase/auth';

const App = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp();
    }
  }, []);
  return (
    <>
      <Router />
      <Toast />
    </>
  );
};

export default App;
