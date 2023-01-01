import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Preload, SignIn } from '@/screens';

const stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Preload" component={Preload} />
      <stack.Screen name="SignIn" component={SignIn} />
    </stack.Navigator>
  );
};

export default MainStack;
