import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {formatDate} from '../helpers';

const Patient = ({item}) => {
  const {patient, owner, email, phone, date, symtoms} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{formatDate(date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
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
});

export default Patient;
