import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const PatientInformation = ({patient, setModalPatient}) => {
  const {patient: patientName, owner, email, phone, symtoms} = patient;
  return (
    <View style={styles.content}>

      <Text style={styles.title}>Información {""}
        <Text style={styles.titleBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable style={styles.btnClose} onLongPress={() => setModalPatient(false)}>
          <Text style={styles.btnCloseText}>X Cerrar</Text>
        </Pressable>
      </View>
      <Text>{patientName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#f59E0B",
        flex: 1
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
})

export default PatientInformation;
