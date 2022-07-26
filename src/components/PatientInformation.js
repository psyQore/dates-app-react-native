import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const PatientInformation = ({patient, setModalPatient}) => {
  const {patient: patientName, owner, email, phone, symtoms} = patient;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Información {''}
        <Text style={styles.titleBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnClose}
          onLongPress={() => setModalPatient(false)}>
          <Text style={styles.btnCloseText}>X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text>{patientName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f59E0B',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  titleBold: {
    fontWeight: '900',
  },
  btnClose: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCloseText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 10,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

export default PatientInformation;
