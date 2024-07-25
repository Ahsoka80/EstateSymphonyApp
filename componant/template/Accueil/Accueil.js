import * as React from 'react';
import { Share, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Avatar, Card, Button, IconSource, IconButton } from 'react-native-paper';
import { ScrollView, View } from "@gluestack-ui/themed";
import { Ionicons } from '@expo/vector-icons';
import * as Yup from "yup";

const Accueil = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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

        <View>
          <Text>Favori</Text>
          <Card style={styles.card}>
            <TouchableOpacity>
            <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content style={styles.textCard}>
              <View style={styles.textCardRight}>
                <Text variant="titleLarge">500 € cc</Text>
                <Text variant="bodyMedium">Studio</Text>
                <Text variant="bodyMedium">1 pièce • 20 m² </Text>
                <Text variant="bodyMedium">Saint-Leu</Text>
                <View style={styles.iconLeft}>
                  <Card.Actions>
                    <IconButton icon="share"
                      onPress={onShare}/>
                    <IconButton
                      icon={() => <Ionicons name="heart" size={24} color="red" />} // Utilisez Ionicons avec le nom "heart"
                      onPress={() => console.log('Favori ajouté')}
                    />
                  </Card.Actions>
                </View>
              </View>
            </Card.Content>
            </TouchableOpacity>
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