import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {Text, View, useWindowDimensions} from 'react-native';
import {BottomTabNavigator} from './BottomTabsNavigator';
import {TopTabNavigator} from './TopTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width > 768 ? 'permanent' : 'slide',
        headerShown: false,

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.white,
        drawerInactiveTintColor: globalColors.dark,
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      {/* <Drawer.Screen name="TopTabs" component={TopTabNavigator} /> */}
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 100,
        }}
      />
      <DrawerItemList {...props} />
      <View style={{flex: 1}}>
        <Text>v1.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};
