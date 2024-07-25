import { onChange } from '@gluestack-style/react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useIsFocused } from '@react-navigation/native';
import { Formik } from 'formik';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { Button, Modal, TextInput } from 'react-native-paper';
import * as Yup from "yup";
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';
import { ScrollView } from '@gluestack-ui/themed';


const AddRdv = ({setIsAgendas}) => {
    
    const isFocus = useIsFocused();
    if (isFocus) {
        setIsAgendas(false)
    }

    const validation = Yup.object({
        energising: Yup.string()
          .notRequired()
          .matches(/^[A-G]$/, "Le mot de passe doit contenir une lettre de A à G"),
    })

    //Datepicker pour la dateTime
    //const [date, setDate] = useState(new Date());
    //const [date, setDate] = useState(dayjs());
    const [value, setDate] = useState(dayjs());

    const [mode, setvalueMode] = useState('date');
    const [displayedDate, setDisplayedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const [show, setShow] = useState(false);
    const showDatepicker = () => {
        setShow(true);
    };

    const onChange = (event, selectedDate) => {
        console.log(event.value);
        const currentDate = selectedDate || value;
        // //setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + ('0' + tempDate.getMinutes()).slice(-2);
        setDisplayedDate(fDate + ' ' + fTime);
        //{Platform.OS === 'android' && (
        //    <Button onPress={showDatepicker} title="Show date picker!" />
        //)}
        

    };
    
   
    return (
        <ScrollView>
            <Formik
                initialValues={{
                select: '',
                titre: '',
                name: '',
                email: '', 
                phone: '',
                message: '' 
                }}

                validationSchema={validation}

                onSubmit={(values) => {
                console.log(values);
                }}
            >

            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.formContainer}>

                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('select')}
                    onBlur={handleBlur('select')}
                    value={values.select}
                    placeholder="select"
                    keyboardType="select"
                />

                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('titre')}
                    onBlur={handleBlur('titre')}
                    value={values.titre}
                    placeholder="Titre"
                    keyboardType="titre"
                />
*
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <Text style={styles.textButton}>Selectionnez la date et l'heure:</Text>

                <TouchableOpacity
                    style={styles.buttonDatetime}
                    title="Open"
                    onPress={() => setModalVisible(true)}
                    
                >
                    <Text>{displayedDate}</Text>
                </TouchableOpacity>


                <Button style= {styles.buttonSubmit} mode="contained" onPress={() => console.log('Pressed')} >
                    Ajouter Rendez-vous
                </Button>
                
                <View style={styles.modalView}>
                    {modalVisible &&(
                        <>
                            {/* <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='datetime'
                                is24Hour={true}
                                display="calendar"
                                onChange={onChange}
                                locale='fr'
                            /> */}

                            <DateTimePicker
                                value={value}
                                onValueChange={onChange}
                            />

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Fermer la fenêtre</Text>
                            </Pressable>
                        </>
                    )}
                </View>

            </View>
        )}
      </Formik>
    </ScrollView>
    );
  
}

export default AddRdv

const styles = StyleSheet.create({
    input:{
        margin: 20,
        fontStyle: '#FFF'
    },
    text: {
        marginTop: 20,
        fontSize: 20,
    },
    buttonDatetime: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#222',
        height: 50,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: 'center',
        margin: 20,
    },
    textButton:{
        marginLeft: 20,
    },
    buttonSubmit: {
        margin: 20,
        backgroundColor: '#555555',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    
})