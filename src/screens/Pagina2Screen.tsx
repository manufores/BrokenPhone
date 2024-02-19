import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {linearGradientColors, styles} from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';
// Import Card component from react-native-elements
import {Card} from '@rneui/themed';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  return (
    <LinearGradient
      colors={linearGradientColors}
      style={styles.fondo}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.2}}>
      <View style={styles.globalMargin}>
        <Text style={styles.texto}>Pagina2Screen</Text>
        <Card containerStyle={styles.card}>
          <Text style={styles.titleCard}>title</Text>
          <Text style={styles.subtitleCard}>subtitle</Text>
          <Text style={styles.content}>content</Text>
        </Card>
        <Button
          title="Ir página 3"
          onPress={() => navigator.navigate('Pagina3Screen')}
        />
      </View>
    </LinearGradient>
  );
};
