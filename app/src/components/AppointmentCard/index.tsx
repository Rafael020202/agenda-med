import React from 'react';

import {
  Area,
  Avatar,
  UserInfoArea,
  UserName,
  ServiceInfoArea,
  ServiceInfo,
  ServiceInfoText,
  ServiceInfoCard,
  ServiceInfoCardText,
} from './styles';

export const AppointmentCard = ({ data }) => {
  return (
    <Area>
      <UserInfoArea>
        <Avatar source={{ uri: data.avatar }} />
        <UserName>{data.name}</UserName>
      </UserInfoArea>

      <ServiceInfoArea>
        <ServiceInfo>
          <ServiceInfoText>Dermatologia</ServiceInfoText>
          <ServiceInfoCard>
            <ServiceInfoCardText>20/01/2023</ServiceInfoCardText>
          </ServiceInfoCard>
        </ServiceInfo>

        <ServiceInfo>
          <ServiceInfoText>R$ 500,00</ServiceInfoText>
          <ServiceInfoCard>
            <ServiceInfoCardText>13:00</ServiceInfoCardText>
          </ServiceInfoCard>
        </ServiceInfo>
      </ServiceInfoArea>
    </Area>
  );
};
