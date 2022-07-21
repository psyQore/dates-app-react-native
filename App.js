import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import Form from './src/components/Form';

const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const newDateHandle = () => {
    console.log('Presionate La Funcion xd');
  };

  return (
    <View style={styles.contaier}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria </Text>
      </Text>

      <Pressable
        onPress={() => setVisibleModal(true)}
        style={styles.btnNewDate}>
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      <Form visibleModal={visibleModal} />
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
  btnNewDate: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewDate: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;

/* 
Solucion:

cd android

.\gradlew clean

cd ..

npm cache clean --force


Puerto react-devtools
adb reverse tcp:8097 tcp:8097

*/
