import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '@/screens/Preload';
import SignIn from '@/screens/SignIn';

const stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <stack.Navigator
      initialRouteName="SignIn"
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
