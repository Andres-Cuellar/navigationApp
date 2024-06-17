import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{marginTop: 20, fontSize: 20, color: 'black'}}>
        {params.name}{' '}
      </Text>
    </View>
  );
};
