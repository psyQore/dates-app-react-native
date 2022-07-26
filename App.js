import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';

const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const patientToEdit = id => {
    const patientToEdit = patients.filter(patient => patient.id === id);
    setPatient(patientToEdit[0]);
  };

  const patientToEliminate = (id) => {
    console.log("Eliminando", id);
  }

  return (
    <View style={styles.contaier}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria </Text>
      </Text>

      <Pressable
        onPress={() => setVisibleModal(!visibleModal)}
        style={styles.btnNewDate}>
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      {patients.length === 0 ? (
        <Text style={styles.noPatients}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.List}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Patient
                item={item}
                setVisibleModal={setVisibleModal}
                patientToEdit={patientToEdit}
              />
            );
          }}
        />
      )}

      <Form
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
      />
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  List: {
    marginTop: 50,
    marginHorizontal: 30,
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
