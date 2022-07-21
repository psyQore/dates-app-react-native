import React, {useState} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Form = ({visibleModal}) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symtoms, setSymtoms] = useState('');

  return (
    <Modal animationType="slide" visible={visibleModal}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva {''}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

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
                onDateChange={(date) => setDate(date)}
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.inputSymtoms]}
              placeholder="Sintomas"
              placeholderTextColor={'#666'}
              value={symtoms}
              onChangeText={setSymtoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>
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
  field: {
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
});

export default Form;
