import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Form = ({
  visibleModal,
  setVisibleModal,
  patients,
  setPatients,
  patient: patientObj,
  setPatient: setPatientApp,
}) => {
  const [id, setId] = useState('');
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symtoms, setSymtoms] = useState('');

  useEffect(() => {
    if (Object.keys(patientObj).length > 0) {
      setPatient(patientObj.patient);
      setId(patientObj.id);
      setOwner(patientObj.owner);
      setEmail(patientObj.email);
      setPhone(patientObj.phone);
      setDate(patientObj.date);
      setSymtoms(patientObj.symtoms);
    }
  }, [patientObj]);

  const handleDate = () => {
    // Validacion
    if ([patient, owner, email, date, symtoms].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Revisar si es una nueva cita o edicion de cita

    const newPatient = {
      patient,
      owner,
      email,
      phone,
      date,
      symtoms,
    };

    if (id) {
      // Editando Cita
      newPatient.id = id;

      const updatedPatients = patients.map(patientState =>
        patientState.id === newPatient.id ? newPatient : patientState,
      );

      setPatients(updatedPatients);
      setPatientApp({});
    } else {
      //Nueva Cita
      newPatient.id = Date.now();
      setPatients([...patients, newPatient]);
    }

    setVisibleModal(!visibleModal);
    setId('');
    setPatient('');
    setOwner('');
    setEmail('');
    setPhone('');
    setDate(new Date());
    setSymtoms('');
  };

  return (
    <Modal animationType="slide" visible={visibleModal}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            {patientObj.id ? 'Editar' : 'Nueva'} {''}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancel}
            onLongPress={() => {
              setVisibleModal(!visibleModal);
              setPatientApp({});
              setPatient('');
              setOwner('');
              setEmail('');
              setPhone('');
              setDate(new Date());
              setSymtoms('');
            }}>
            <Text style={styles.btnCancelText}>X Cancelar</Text>
          </Pressable>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telfono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={11}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.dateContainer}>
              <DatePicker
                date={date}
                locale="es"
                onDateChange={date => setDate(date)}
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.inputSymtoms]}
              placeholderTextColor={'#666'}
              value={symtoms}
              onChangeText={setSymtoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.btnNewDate} onPress={handleDate}>
            <Text style={styles.newDateText}>
              {patientObj.id ? 'Editar' : 'Agregar'} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#6D28D9',
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
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCancelText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  field: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  inputSymtoms: {
    height: 100,
  },
  dateContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnNewDate: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  newDateText: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Form;
