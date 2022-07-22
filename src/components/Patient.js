import React from 'react'
import {Text} from 'react-native'

const Patient = ({item }) => {

    const {patient, owner, email, phone, date, symtoms} = item;

  return (
    <Text>{patient}</Text>
  )
}

export default Patient