import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";

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
    </stack.Navigator>
  );
};

export default MainStack;
