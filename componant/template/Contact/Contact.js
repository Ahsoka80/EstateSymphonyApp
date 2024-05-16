import { Button, ButtonText, View } from "@gluestack-ui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { StyleSheet, Text, TextInput } from "react-native"

const validation = Yup.object({
  email: Yup.string().email('Cet email ne correspond pas une adresse email valide').required('Le champ Email est obligatoire'),
  password: Yup.string()
      .required('Ce champ est obligatoire')
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Le mot de passe doit contenir au moins 1 minuscule et 1 majuscule")
      .matches(/\d/, "Le mot de passe doit contenir au moins 1 chiffre")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Le mot de passe doit contenir au moins 1 caractère spécial")
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})

const Contact = () => {
  return (
    <View>
      <Formik
        initialValues={{
          referencebien: '',
          emailOrPhone: '',
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
            onChangeText={handleChange('reference')}
            onBlur={handleBlur('reference')}
            value={values.email}
            placeholder="Référence du bien"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('emailOrPhone')}
            onBlur={handleBlur('emailOrPhone')}
            value={values.email}
            placeholder="Préférence de recontact (email/téléphone)"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.email}
            placeholder="Nom et Prénom"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            keyboardType="email-address"
          />

          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.password}
            placeholder="Numéro de télephone"
            keyboardType="email-address"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('message')}
            onBlur={handleBlur('message')}
            value={values.password}
            placeholder="Message"
          />

          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button size="sm">
            <ButtonText>Envoyer</ButtonText>
          </Button>

        </View>
      )}
      </Formik>
    </View>
  )
}

export default Contact

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