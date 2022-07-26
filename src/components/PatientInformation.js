import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {formatDate} from '../helpers';

const PatientInformation = ({patient, setModalPatient, setPatient}) => {
  const {patient: patientName, owner, email, phone, date, symtoms} = patient;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Información {''}
        <Text style={styles.titleBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnClose}
          onLongPress={() => {
            setModalPatient(false);
            setPatient({});
          }}>
          <Text style={styles.btnCloseText}>X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{patientName}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.value}>{owner}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Télefono:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Fecha De Consulta:</Text>
          <Text style={styles.value}>{formatDate(date)}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.value}>{symtoms}</Text>
        </View>
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
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  value: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});

export default PatientInformation;
