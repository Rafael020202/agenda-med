import React from 'react';

import {
  Container,
  UserInfoArea,
  CustomButton,
  CustomButtonText,
  SignOutButton,
  SignOutButtonText,
  SignOutArea,
  Scroller,
} from './styles';

import { InfoSelectInput, InfoInput } from '@/components';

import ArrowLeft from '@/assets/arrow_left.svg';

export const Profile: React.FC = () => {
  return (
    <Container>
      <Scroller
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <UserInfoArea>
          <InfoInput
            placeholder="Nome"
            value={'Marina Rodrigues'}
            onChangeText={() => true}
          />

          <InfoInput
            placeholder="E-mail"
            value={'luizrafael391@gmail.com'}
            onChangeText={() => true}
          />

          <InfoInput
            placeholder="CEP"
            value={'18133210'}
            onChangeText={() => true}
          />

          <InfoSelectInput placeholder="Estado" />

          <InfoInput
            placeholder="Cidade"
            value={'São Roque'}
            onChangeText={() => true}
          />

          <InfoInput
            placeholder="Endereço"
            value={'Rua paschoal belmonte'}
            onChangeText={() => true}
          />

          <InfoInput
            placeholder="Número"
            value={'210'}
            onChangeText={() => true}
          />

          <CustomButton>
            <CustomButtonText>SALVAR</CustomButtonText>
          </CustomButton>

          <SignOutArea>
            <SignOutButton>
              <ArrowLeft width="20" height="20" fill="#fff" />
              <SignOutButtonText>
                Sair e entrar em outra conta
              </SignOutButtonText>
            </SignOutButton>
          </SignOutArea>
        </UserInfoArea>
      </Scroller>
    </Container>
  );
};
