import React from 'react';
import { TextInput } from 'react-native'
import theme from '../../theme'

const TextInputBox = (props) => {
  return (
    <TextInput
      autoFocus={props.autoFocus}
      style={props.style}
      placeholder={props.placeholder}
      placeholderTextColor={theme.colors.genderBorder}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  );
}
export default TextInputBox;