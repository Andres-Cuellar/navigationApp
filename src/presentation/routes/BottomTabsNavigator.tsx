import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabOneScreen} from '../screens/tabs/TabOneScreen';
import {TabTwoScreen} from '../screens/tabs/TabTwoScreen';
import {TabThreeScreen} from '../screens/tabs/TabThreeScreen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.white}}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'One',
          tabBarIcon: ({color}) => (
            <Icon name="airplane-outline" size={20} color={color} />
          ),
        }}
        component={TabOneScreen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Two',
          tabBarIcon: ({color}) => (
            <Icon name="person-circle-outline" size={20} color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Three',
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" size={20} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
