import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  return (
    <LinearGradient
      colors={['blue', 'white']}
      style={styles.fondo}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.globalMargin}>
        <Text style={styles.texto}>Pagina2Screen</Text>

        <Button
          title="Ir página 3"
          onPress={() => navigator.navigate('Pagina3Screen')}
        />
      </View>
    </LinearGradient>
  );
};
