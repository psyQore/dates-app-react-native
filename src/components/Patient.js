import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {formatDate} from '../helpers';

const Patient = ({
  item,
  setVisibleModal,
  setPatient,
  patientToEdit,
  patientToEliminate,
  setModalPatient,
}) => {
  const {patient, owner, email, phone, date, symtoms, id} = item;

  return (
    <Pressable
      onLongPress={() => {
        setModalPatient(true);
        setPatient(item);
      }}>
      <View style={styles.container}>
        {/* <Text style={styles.label}>Propietario:</Text>
      <Text style={styles.text}>{owner}</Text> */}
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>

        <View style={styles.containerButtons}>
          <Pressable
            onLongPress={() => {
              setVisibleModal(true);
              patientToEdit(id);
            }}
            style={[styles.btn, styles.btnEdit]}>
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.btnDelete]}>
            <Text
              style={styles.btnText}
              onLongPress={() => patientToEliminate(id)}>
              Eliminar
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  owner: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  text: {
    color: '#6d28d9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '374151',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 9,
    paddingHorizontal: 25,
    borderRadius: 7,
  },
  btnEdit: {
    backgroundColor: '#f59E5E',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});

export default Patient;
