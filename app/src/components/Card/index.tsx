import React from 'react';

import { Stars } from '@/components';
import {
  Area,
  Avatar,
  InfoArea,
  SeeProfileButton,
  SeeProfileButtonText,
  UserName,
  UserSpecialty,
} from './styles';

export const Card = ({ data }) => {
  return (
    <Area>
      <Avatar source={{ uri: data.avatar }} />

      <InfoArea>
        <UserName>{data.name}</UserName>

        <UserSpecialty>{data.specialty}</UserSpecialty>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
