import React from 'react';

import { InputArea, Input } from './styles';

const SignInput = ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password = false,
}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#626262" />

      <Input
        placeholder={placeholder}
        placeholderTextColor="#626262"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

export default SignInput;
