import {StyleSheet} from 'react-native';

export const linearGradientColors = ['blue', 'lightblue'];

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /* backgroundColor: 'blue', */
  },
  texto: {
    color: 'white',
  },

  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  titleCard: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
  },
  subtitleCard: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#666',
    margin: 10,
  },
  content: {
    fontSize: 16,
    color: '#999',
    margin: 10,
  },
});
