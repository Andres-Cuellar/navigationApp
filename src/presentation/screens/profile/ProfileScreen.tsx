import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: top + 20}}>
      <Text>ProfileScreen</Text>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Text>Menu</Text>
      </Pressable>
    </View>
  );
};
