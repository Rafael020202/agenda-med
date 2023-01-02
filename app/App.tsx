import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import MainStack from './src/stacks/MainStack';

const customFonts = {
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
};

export default function App() {
  useFonts(customFonts);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
