import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const Compte = () => {
  return (

    <View>

      
      <TextInput
        style={styles.input}
        placeholder="select"
        keyboardType="select"
      />

      {/* {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>} */}

      <TextInput
          style={styles.input}
          placeholder="Titre"
          keyboardType="titre"
      />

      {/* {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
      
      <Button style= {styles.buttonSubmit} mode="contained" onPress={() => console.log('Pressed')} >
        Ajouter Rendez-vous
      </Button>

    </View>

  )
}

export default Compte

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