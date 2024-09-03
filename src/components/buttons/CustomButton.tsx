import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  type: 'login' | 'custom';
  loading?: boolean;
  onSubmit: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>; // Separate prop for text styles
}

const CustomButton: React.FC<Props> = ({
  type,
  loading,
  onSubmit,
  style,
  textStyle,
}) => {
  const buttonText = loading
    ? 'LOADING...'
    : type === 'login'
    ? 'LOGIN'
    : type === 'save'
    ? 'Save Changes'
    : type === 'add'
    ? 'ADD'
    : type === 'edit'
    ? 'Edit'
    : 'CUSTOM BUTTON';

  return (
    <TouchableOpacity
      style={[
        {padding: 10, alignItems: 'center', justifyContent: 'center'},
        style,
      ]} // Merge default and custom styles
      onPress={onSubmit}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" /> // Show loader if loading
      ) : (
        <Text style={textStyle}>{buttonText}</Text> // Apply text style
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
