import { Image } from 'react-native';
import React, { useState } from 'react';

import { Container, InputArea, CustomButton, CustomButtonText } from './styles';
import { SignInput } from '@/components';

import Email from '@/assets/email.svg';
import Lock from '@/assets/lock.svg';
import Person from '@/assets/person.svg';

export const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image
        source={require('../../assets/doctor.png')}
        style={{ width: 160, height: 160 }}
      />
      <InputArea>
        <SignInput
          IconSvg={Person}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <SignInput
          IconSvg={Email}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <SignInput
          IconSvg={Lock}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          password={true}
        />

        <CustomButton>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
