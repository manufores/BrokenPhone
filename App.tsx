import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
/* import {StackNavigator} from './src/navigator/StackNavigator'; */
/* import {StatusBar} from 'react-native'; */
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor={'blue'} /> */}
      <MenuLateralBasico />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
