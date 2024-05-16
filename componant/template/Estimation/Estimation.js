import * as React from 'react';
import { Button, ButtonText, View } from "@gluestack-ui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { StyleSheet, Text, TextInput } from "react-native"


const Estimation = () => {

  const validation = Yup.object({
    email: Yup.string().email('Cet email ne correspond pas une adresse email valide').required('Le champ Email est obligatoire'),
    password: Yup.string()
    .required('Ce champ est obligatoire')
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Le mot de passe doit contenir au moins 1 minuscule et 1 majuscule")
    .matches(/\d/, "Le mot de passe doit contenir au moins 1 chiffre")
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Le mot de passe doit contenir au moins 1 caractère spécial")
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  })

return (
  <View>
    <Formik
      initialValues={{
        location: '',
        typeImmo : '',
        surface: '',
        showerRoom: '', 
        room: '',
        floor: '',
        balcony: '',
        parking: '',
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
            onChangeText={handleChange('location')}
            onBlur={handleBlur('location')}
            value={values.email}
            placeholder="Location"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('typeImmo')}
            onBlur={handleBlur('typeImmo')}
            value={values.email}
            placeholder="Type de propriété "
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('surface')}
            onBlur={handleBlur('surface')}
            value={values.email}
            placeholder="Surface (en m²)"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('showerRoom')}
            onBlur={handleBlur('showerRoom')}
            value={values.email}
            placeholder="Nombre de salle de bain"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('room')}
            onBlur={handleBlur('room')}
            value={values.password}
            placeholder="Nombre de pièce"
            keyboardType="email-address"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('floor')}
            onBlur={handleBlur('floor')}
            value={values.password}
            placeholder="Nombre de d'étage"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('balcony')}
            onBlur={handleBlur('balcony')}
            value={values.password}
            placeholder="Balcon"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('parking')}
            onBlur={handleBlur('parking')}
            value={values.password}
            placeholder="Parking"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button size="sm">
            <ButtonText>J'estime mon bien !</ButtonText>
          </Button>

        </View>
      )}
    
    </Formik>
  </View>
)
}

export default Estimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  input: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff', // couleur de fond des cartes
    width: 400,
    height: 40,
    borderRadius: 5, // bord arrondi
    elevation: 1, // ombre
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});