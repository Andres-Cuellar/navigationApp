import React, {useEffect} from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const dimensions = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        dimensions.width > 768 ? null : (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>Menu</Text>
          </Pressable>
        ),
    });
  }, [dimensions]);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
