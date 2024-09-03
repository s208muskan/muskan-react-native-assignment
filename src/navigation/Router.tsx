import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Auth/Splash';
import Login from '../screens/Auth/Login';
import Todo from '../screens/Todo/Todo';
import BottomNav from './BottomNav';
import Profile from '../screens/profile/Profile';
import {ThemeProvider, useTheme} from '../theme/ThemeProvider';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {theme} = useTheme(); // Now safely inside the ThemeProvider
  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            title: 'awesomeproject',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: 'Todo List',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{
            headerShown: true,
            title: 'awesomeproject',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomNav}
          options={{
            headerShown: true,
            title: 'awesomeproject',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: 'awesomeproject',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Router = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default Router;
