import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: '#D3D3D3',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D289D',
  },
});

export default App;

/* 
Solucion:

cd android

.\gradlew clean

cd ..

npm cache clean --force


*/
