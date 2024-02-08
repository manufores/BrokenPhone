import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina3Screen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
