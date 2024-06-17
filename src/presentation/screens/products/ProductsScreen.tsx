import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
];

export const ProducstScreen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>
        Productos
      </Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigator.navigate('Product', {id: item.id, name: item.name})
            }
          />
        )}
      />
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>
        Ajustes
      </Text>
      <PrimaryButton
        label="Settings"
        onPress={() => navigator.navigate('Settings')}
      />
    </View>
  );
};
