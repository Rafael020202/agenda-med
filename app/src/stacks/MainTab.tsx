import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from '@/components';
import { Search } from '@/screens';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Appointments" component={Search} />
      <Tab.Screen name="Favorites" component={Search} />
      <Tab.Screen name="Profile" component={Search} />
    </Tab.Navigator>
  );
};

export default MainTab;
