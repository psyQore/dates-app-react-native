import React from 'react';
import { Text } from 'react-native'

const PatientInformation = ({ patient }) => {
    const { patient: patientName, owner, email, phone, symtoms} = patient;
  return (
    <Text>{patientName}</Text>
  )
}

export default PatientInformation