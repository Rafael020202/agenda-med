import { Image } from 'react-native';
import React from 'react';

import { Container, LoadIcon } from './styles';

export const Preload: React.FC = () => {
  return (
    <Container>
      <Image
        source={require('@/assets/doctor.png')}
        style={{ width: 200, height: 200 }}
      />
      <LoadIcon size="large" color="#ffffff" />
    </Container>
  );
};
