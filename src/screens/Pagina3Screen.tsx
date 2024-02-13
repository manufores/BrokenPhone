import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <LinearGradient
      colors={['blue', 'white']}
      style={styles.fondo}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.globalMargin}>
        <Text style={styles.texto}>Pagina3Screen</Text>

        <Button title="Regresar" onPress={() => navigation.pop()} />
        <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
    </LinearGradient>
  );
};
