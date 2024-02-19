import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {linearGradientColors, styles} from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <LinearGradient
      colors={linearGradientColors}
      style={styles.fondo}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.2}}>
      <View style={styles.globalMargin}>
        {/* Componente TouchableOpacity que envuelve el texto del botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pagina2Screen')}>
          <Text style={styles.buttonText}>Press to Play</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
