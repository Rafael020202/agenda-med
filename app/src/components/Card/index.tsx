import React from 'react';

import { Stars } from '@/components';
import {
  Area,
  Avatar,
  InfoArea,
  SeeProfileButton,
  SeeProfileButtonText,
  UserName,
} from './styles';

export const Card = ({ data }) => {
  return (
    <Area>
      <Avatar source={{ uri: data.avatar }} />

      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
