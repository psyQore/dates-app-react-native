import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Patient = ({item}) => {
  const {patient, owner, email, phone, date, symtoms} = item;

  const formatDate = date => {
    const dateNew = new Date(date);

    const options = {
      weekdat: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };

    return dateNew.toLocaleDateString('es-ES', options);
  };

  return (
    <View>
      <Text>{patient}</Text>
      <Text>{formatDate(date)}</Text>
    </View>
  );
};

export default Patient;
