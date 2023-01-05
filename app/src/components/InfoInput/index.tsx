import React from 'react';

import { InputLabel, Container, Input, InputArea } from './styles';

export const InfoInput = ({
  placeholder,
  value,
  onChangeText,
  password = false,
}) => {
  return (
    <Container>
      <InputLabel>{placeholder}</InputLabel>
      <InputArea>
        <Input
          placeholder={placeholder}
          placeholderTextColor="#626262"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
        />
      </InputArea>
    </Container>
  );
};
