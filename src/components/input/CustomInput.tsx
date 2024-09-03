import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {TextInput} from 'react-native';

interface Props {
  style: any;
  placeholder: string;
  placeholderTextColor: string;
  secureTextEntry: any;
  value: string;
  onChangeText: any;
  textColor: any;
  onChange: any;
}

const CustomInput = ({
  placeholder,
  style,
  placeholderTextColor,
  secureTextEntry,
  value,
  onChangeText,
  textColor,
  onChange,
}: Props) => {
  return (
    <View>
      {/* <Text>CustomInput</Text> */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[style, {color: textColor}]}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        //  onChange={onChange}
        // errorMessage='error'
      />
    </View>
  );
};

export default CustomInput;
