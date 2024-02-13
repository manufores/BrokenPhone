import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <LinearGradient
      colors={['blue', 'lightblue']}
      style={styles.fondo}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.2}}>
      <View style={styles.globalMargin}>
        <Text style={styles.texto}>Pagina1Screen</Text>

        <Button
          title="Ir a página 2"
          onPress={() => navigation.navigate('Pagina2Screen')}
        />
      </View>
    </LinearGradient>
  );
};
