import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Preload, SignIn, SignUp } from '@/screens';
import MainTab from './MainTab';

const stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Preload" component={Preload} />
      <stack.Screen name="SignIn" component={SignIn} />
      <stack.Screen name="SignUp" component={SignUp} />
      <stack.Screen name="MainTab" component={MainTab} />
    </stack.Navigator>
  );
};

export default MainStack;
