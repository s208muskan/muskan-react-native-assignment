import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './style';
import CustomInput from '../../components/input/CustomInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../components/buttons/CustomButton';
import {useTheme} from '../../theme/ThemeProvider';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type Props = {
  navigation?: any;
};

const Login = ({navigation}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const {theme} = useTheme();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '101963987406-d4lteigeib8m6o4qu6ric2cgs79e1h6e.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo;

      if (!idToken) {
        throw new Error('Failed to get ID Token from Google Sign-In');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      navigation.navigate('Home', {username: userCredential.user.email});
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setIsOtpSent(true);
      Alert.alert('OTP has been sent to your phone');
    } catch (error) {
      console.error('Phone Sign-In Error:', error);
      Alert.alert('Failed to send OTP. Please try again.');
    }
  };

  const confirmCode = async () => {
    if (confirm) {
      try {
        await confirm.confirm(otp);
        navigation.navigate('Home', {username: phoneNumber});
      } catch (error) {
        console.error('OTP Confirmation Error:', error);
        Alert.alert('Invalid OTP. Please try again.');
      }
    } else {
      Alert.alert('Please request an OTP first');
    }
  };

  const dynamicStyles = theme === 'dark' ? styles.dark : styles.light;

  return (
    <View style={[styles.mainContainer, dynamicStyles.mainContainer]}>
      <Text style={[styles.loginText, dynamicStyles.loginText]}>Login</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomInput
          placeholder="Enter your phone number"
          style={[styles.inputContainer, dynamicStyles.inputContainer]}
          placeholderTextColor={dynamicStyles.placeholderTextColor}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          textColor={dynamicStyles.textColor}
          keyboardType="phone-pad"
        />
        {isOtpSent && (
          <CustomInput
            placeholder="Enter OTP"
            style={[styles.inputContainer, dynamicStyles.inputContainer]}
            placeholderTextColor={dynamicStyles.placeholderTextColor}
            value={otp}
            onChangeText={setOtp}
            textColor={dynamicStyles.textColor}
            keyboardType="number-pad"
          />
        )}
        <CustomButton
          type="login"
          style={[styles.loginBtn, dynamicStyles.loginBtn]}
          textStyle={[styles.loginBtnText, dynamicStyles.loginBtnText]}
          onSubmit={() =>
            isOtpSent ? confirmCode() : signInWithPhoneNumber(phoneNumber)
          }
        />
        <Text style={[styles.orText, dynamicStyles.orText]}>or</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[styles.GoogleTextStyle, dynamicStyles.GoogleTextStyle]}
            onPress={onGoogleButtonPress}>
            Sign in with Google
          </Text>
          <AntDesign
            name="google"
            color={dynamicStyles.googleIconColor}
            size={22}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
