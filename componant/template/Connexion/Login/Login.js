import { View, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, ButtonText} from '@gluestack-ui/themed';

const validation = Yup.object({
  email: Yup.string().email('Cet email ne correspond pas une adresse email valide').required('Le champ Email est obligatoire'),
  password: Yup.string()
      .required('Ce champ est obligatoire')
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Le mot de passe doit contenir au moins 1 minuscule et 1 majuscule")
      .matches(/\d/, "Le mot de passe doit contenir au moins 1 chiffre")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Le mot de passe doit contenir au moins 1 caractère spécial")
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})

const Login = () => {
  const navigate = createNativeStackNavigator();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = async (data) => {
  let message = '';
        try {
            message = await login(data)
            if (message.status === 422) {
                toast.error('Connexion échouée', {
                    position: 'bottom-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    transition: Zoom,
                });
                toast.info(message.data.message, {
                    position: 'bottom-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    transition: Slide,
                })
            } else {
                console.log('Connexion de l\'utilisateur');
                toast.success('Connexion réussi', {
                    position: 'bottom-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    transition: Flip,
                })
                navigate('/');
            }
        } catch (error) {
            console.error('Erreur : ', error);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    }
    return (
      <View style={styles.container}>

          <View style={styles.text}> 
            <Text>Se connecter</Text>
            <Text>Vous n'avez pas de compte ? Créer un compte </Text>
          </View>

          <Formik
          
            initialValues={{ 
              email: '', 
              password: '' 
            }}
            validationSchema={validation}

            onSubmit={(values) => {
              console.log(values);
            }}
          >

          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.form}>

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
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry
              />

              {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

              <Button size="sm">
                <ButtonText>Se connecter</ButtonText>
              </Button>

            </View>
          )}
        
        </Formik>
      
      </View>
    );  
  }

  export default Login

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    text:{
      justifyContent: 'center',
      margin: 30,
    },
    form:{
      justifyContent: 'center',
      margin: 30,
      backgroundColor: '#ff0',
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
