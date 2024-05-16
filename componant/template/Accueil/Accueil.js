import * as React from 'react';
import { StyleSheet, Text, TextInput } from "react-native";
import { Avatar, Card, Button, IconSource, IconButton } from 'react-native-paper';
import { ScrollView, View } from "@gluestack-ui/themed";
import { Ionicons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as Yup from "yup";
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { icons } from 'lucide-react-native';

const Accueil = () => {
  const validation = Yup.object({
    energising: Yup.string()
      .notRequired()
      .matches(/^[A-G]$/, "Le mot de passe doit contenir une lettre de A à G"),
  })
  const handleSearch = async (data) => {
    try {
      setPropertiesBySearch(await getPropertiesBySearch(data));
    } catch (error) {
      console.error('Erreur : ', error);
    }
  }

  const [selectedValue, setSelectedValue] = React.useState(null);
  const placeholder = {
    label: 'Select an option...',
    value: null,
  };
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <>
      <ScrollView>
        <Card style={styles.image}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>

        {/*<Formik 
          enableReinitialize
          validationSchema={validation}
          initialValues={{
            price: '',
            status: '',
            energising: '',
            floor: '',
            parking: '',
            balcony: '',
            rooms: '',
            showerRoom: '',
            surface: '',
            typeEnergic: '',
            district: '',
            heatingSystem: '',
          }}
          onSubmit={handleSearch}
        >
        
        {/*{({ values, handleChange, handleSubmit, handleReset, errors }) => {(
          <View style={styles.formContainer}>

            <TextInput
              label="Prix"
              value={values.price}
              onChangeText={(value) => handleChange('price', value)}
              keyboardType="numeric"
            />
            <TextInput
              label="Etat (En vente, en location, vendu ou loué)"
              value={values.status}
              onChangeText={(value) => handleChange('status', value)}
            />
            <TextInput
              label="Classe énergétique"
              value={values.energising}
              onChangeText={(value) => handleChange('energising', value)}
            />
            <TextInput
              label="Nombre d'étages"
              value={values.floor}
              onChangeText={(value) => handleChange('floor', value)}
              keyboardType="numeric"
            />

            <Checkbox
              label="Place de parking"
              value={values.parking}
              onChangeText={(value) => handleChange('parking', value)}
            />

            <Checkbox
              label="Balcon"
              value={values.balcony}
              onChangeText={(value) => handleChange('balcony', value)}
            />  

            <TextInput
              label="Nombre de pièce"
              value={values.rooms}
              onChangeText={(value) => handleChange('rooms', value)}
              keyboardType="numeric"
            />

            <TextInput
              label="Surface en m²"
              value={values.surface}
              onChangeText={(value) => handleChange('surface', value)}
              keyboardType="numeric"
            />

            <TextInput
              label="Type d'énergie"
              value={values.typeEnergic}
              onChangeText={(value) => handleChange('typeEnergic', value)}
            />

            <TextInput
              label="Quartier"
              value={values.district}
              onChangeText={(value) => handleChange('district', value)}
              keyboardType="numeric"
            />

            <Text>Select an option:</Text>
            <RNPickerSelect
              placeholder={placeholder}
              items={options}
              onValueChange={(value) => setSelectedValue(value)}
              value={selectedValue}
            />
            {selectedValue && <Text>Selected: {selectedValue}</Text>}
        </Formik>*/}
        <View>
          <Text>Favori</Text>
          <Card style={styles.card}>
            <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content style={styles.textCard}>
              <View style={styles.textCardRight}>
                <Text variant="titleLarge">500 € cc</Text>
                <Text variant="bodyMedium">Studio</Text>
                <Text variant="bodyMedium">1 pièce • 20 m² </Text>
                <Text variant="bodyMedium">Saint-Leu</Text>
                <View style={styles.iconLeft}>
                  <Card.Actions>
                    <IconButton icon="share"></IconButton>
                    <IconButton
                      icon={() => <Ionicons name="heart" size={24} color="red" />} // Utilisez Ionicons avec le nom "heart"
                      onPress={() => console.log('Favori ajouté')}
                    />
                  </Card.Actions>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>

      </ScrollView>
  </>
)
}

export default Accueil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#fff',
  },
  image : {
    margin: 20,
    justifyContent: 'center',
  },
  card : {
    margin: 20,
    justifyContent: 'center',
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
  textCardRight:{
    marginLeft: 15,
  },
  iconLeft: {
    marginTop: -60,
  }

})