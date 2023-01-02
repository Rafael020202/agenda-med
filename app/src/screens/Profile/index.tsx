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

import { SignInput } from '@/components';
import Email from '@/assets/email.svg';
import Person from '@/assets/person.svg';
import Location from '@/assets/my_location.svg';
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
          <SignInput
            IconSvg={Person}
            placeholder="Nome"
            value={''}
            onChangeText={() => true}
          />

          <SignInput
            IconSvg={Email}
            placeholder="E-mail"
            value={''}
            onChangeText={() => true}
          />

          <SignInput
            IconSvg={Location}
            placeholder="Localização"
            value={''}
            onChangeText={() => true}
            password={true}
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
