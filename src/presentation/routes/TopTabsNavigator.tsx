import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AboutScreen} from '../screens/about/AboutScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();
export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          options={{
            title: 'Profile',
            tabBarIndicatorStyle: {backgroundColor: 'red'},
          }}
          component={ProfileScreen}
        />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
