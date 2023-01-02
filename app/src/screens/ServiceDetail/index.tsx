import React from 'react';

import { Stars } from '@/components';
import {
  Container,
  ServiceDetailArea,
  Avatar,
  UserInfoArea,
  UserName,
  UserInfo,
  ServiceInfoArea,
  ServiceInfoLabel,
  ServiceInfo,
  ServiceInfoDescription,
  AppointmentButtonArea,
  AppointmentButton,
  AppointmentButtonText,
  BackButton,
} from './styles';

import BackIcon from '@/assets/back.svg';

export const ServiceDetail: React.FC = () => {
  return (
    <Container>
      <ServiceDetailArea>
        <UserInfoArea>
          <Avatar
            source={{
              uri: 'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
            }}
          />

          <UserInfo>
            <UserName>Carolina ferreira</UserName>
            <Stars stars={4} showNumber={true} />
          </UserInfo>
        </UserInfoArea>

        <ServiceInfoArea>
          <ServiceInfo>
            <ServiceInfoLabel>Especialidade</ServiceInfoLabel>
            <ServiceInfoDescription>Dermatologia</ServiceInfoDescription>
          </ServiceInfo>

          <ServiceInfo>
            <ServiceInfoLabel>Número</ServiceInfoLabel>
            <ServiceInfoDescription>(11) 937774319</ServiceInfoDescription>
          </ServiceInfo>

          <ServiceInfo>
            <ServiceInfoLabel>Valor</ServiceInfoLabel>
            <ServiceInfoDescription>R$ 55,00</ServiceInfoDescription>
          </ServiceInfo>

          <ServiceInfo>
            <ServiceInfoLabel>Endereço</ServiceInfoLabel>
            <ServiceInfoDescription>
              Rua paschoal belmonte, 203
            </ServiceInfoDescription>
          </ServiceInfo>
        </ServiceInfoArea>

        <AppointmentButtonArea>
          <AppointmentButton>
            <AppointmentButtonText>AGENDAR</AppointmentButtonText>
          </AppointmentButton>
        </AppointmentButtonArea>
      </ServiceDetailArea>
      <BackButton>
        <BackIcon width="44" height="44" fill="#ffffff" />
      </BackButton>
    </Container>
  );
};
