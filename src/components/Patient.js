import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {formatDate} from '../helpers';

const Patient = ({item}) => {
  const {patient, owner, email, phone, date, symtoms} = item;

  return (
    <View>
      <Text>{patient}</Text>
      <Text>{formatDate(date)}</Text>
    </View>
  );
};

export default Patient;
