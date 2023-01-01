import { Image } from 'react-native';
import React, { useState } from 'react';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonBold,
} from './styles';
import { SignInput } from '@/components';

import Email from '@/assets/email.svg';
import Lock from '@/assets/lock.svg';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image
        source={require('@/assets/doctor.png')}
        style={{ width: 160, height: 160 }}
      />
      <InputArea>
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
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonBold>Cadastre-se</SignMessageButtonBold>
      </SignMessageButton>
    </Container>
  );
};
