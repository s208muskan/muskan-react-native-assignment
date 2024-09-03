import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import styles from './style';
import CustomInput from '../../components/input/CustomInput';
import CustomButton from '../../components/buttons/CustomButton';
import {useTheme} from '../../theme/ThemeProvider';

const Profile = ({route}) => {
  const {username} = route.params;
  const {theme, toggleTheme} = useTheme();

  const dynamicStyles = theme === 'light' ? styles.light : styles.dark;

  return (
    <View style={[styles.mainContainer, dynamicStyles.mainContainer]}>
      <View style={styles.toggleContainer}>
        <Text style={[styles.textStyle, dynamicStyles.textStyle]}>
          Dark Mode
        </Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
      <Text style={[styles.ProfileText, dynamicStyles.ProfileText]}>
        Account Details
      </Text>
      <View style={styles.AccountDetailsContainer}>
        <Image style={[styles.imageStyle, dynamicStyles.imageStyle]} />
        <View style={styles.AccountDetails}>
          <Text style={[styles.textStyle, dynamicStyles.textStyle]}>
            {username}
          </Text>
        </View>
      </View>
      <CustomInput
        placeholder="Phone Number"
        style={[styles.inputContainer, dynamicStyles.inputContainer]}
        placeholderTextColor={dynamicStyles.placeholderTextColor}
        textColor={dynamicStyles.textColor}
      />
      <CustomInput
        placeholder="Email Address"
        style={[styles.inputContainer, dynamicStyles.inputContainer]}
        placeholderTextColor={dynamicStyles.placeholderTextColor}
        textColor={dynamicStyles.textColor}
      />
      <CustomButton
        type="save"
        style={[styles.saveBtn, dynamicStyles.saveBtn]}
        textStyle={[styles.saveBtnText, dynamicStyles.saveBtnText]}
      />

      {/* Add the Toggle Switch for Dark Mode */}
    </View>
  );
};

export default Profile;
