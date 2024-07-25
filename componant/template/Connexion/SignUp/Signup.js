import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ButtonText } from '@gluestack-ui/themed';

const validationSchema = yup.object().shape({
    firstName: yup.string().required('Le prénom est requis'),
    lastName: yup.string().required('Le nom est requis'),
    email: yup.string().email('Adresse email invalide').required('L\'email est requis'),
    confirmEmail: yup.string().oneOf([yup.ref('email'), null], 'Les adresses email doivent correspondre').required('La confirmation de l\'email est requise'),
    password: yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Le mot de passe est requis'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre').required('La confirmation du mot de passe est requise'),
});

const Signup = () => {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', confirmEmail: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Submit function, you can do whatever you want with form values here
            console.log(values);
          }}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder="Prénom"
            />

            {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder="Nom"
            />

            {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

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
              onChangeText={handleChange('confirmEmail')}
              onBlur={handleBlur('confirmEmail')}
              value={values.confirmEmail}
              placeholder="Confirmer Email"
              keyboardType="email-address"
            />

            {touched.confirmEmail && errors.confirmEmail && <Text style={styles.error}>{errors.confirmEmail}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Mot de passe"
              secureTextEntry
            />

            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Confirmer Mot de passe"
              secureTextEntry
            />

            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

            <Button onPress={handleSubmit} title="Créer un compte" />

            <Text>
                ou
            </Text>

            <ButtonText>
                Se connecter
            </ButtonText>
            

          </View>
        )}
      </Formik>
     </View>
    )
  }
  export default Signup

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    formContainer: {
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    error: {
      color: 'red',
      marginBottom: 5,
    },
  });