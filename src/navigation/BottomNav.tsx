import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from '../screens/Todo/Todo';
import Profile from '../screens/profile/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '../theme/ThemeProvider'; // Import the useTheme hook

const Tab = createBottomTabNavigator();

const BottomNav = ({route}) => {
  const {username} = route.params;
  const {theme} = useTheme(); // Get the current theme

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Todo') {
            iconName = 'home'; // Icon for Todo
          } else if (route.name === 'Profile') {
            iconName = 'user'; // Icon for Profile
          }

          // Return the AntDesign icon component
          return <AntDesign name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: theme === 'dark' ? 'white' : 'green',
        tabBarInactiveTintColor: theme === 'dark' ? 'green' : 'black',
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        },
      })}>
      <Tab.Screen name="Todo" component={Todo} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
        initialParams={{username}}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
