import { View, Text, TouchableOpacity, StyleSheet, Share } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'
import React from 'react'


const EspaceLocataire = () => {

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

  return (
    <View>
      <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => console.log('Partage ajouté')}
          >
          <Card.Title
            title="PDF Bail"
            subtitle="Bail de la location"
            left={(props) => <Avatar.Icon {...props} icon="download" style={styles.backgroundIcon} />}
          />
        </TouchableOpacity>
      </Card>
      <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => console.log('Partage ajouté')}
          >
          <Card.Title
            title="Etat des lieux"
            subtitle="Etat des lieux signé"
            left={(props) => <Avatar.Icon {...props} icon="download" style={styles.backgroundIcon} />}
          />
        </TouchableOpacity>
      </Card>

      <Text style={styles.text}> Ma location :  </Text>
      
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
                      onPress={onShare}
                    />
                  </Card.Actions>
                </View>
              </View>
            </Card.Content>
        </TouchableOpacity>
      </Card>
    </View>
  )
}

export default EspaceLocataire

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin : 50,
    
  },
  card: {
    marginBottom: 20,
    margin: 25,
    backgroundColor: '#fff',
    width: 350,
    borderRadius: 10, 
    elevation: 2,
},
  button: {
    marginBottom: 105,
    backgroundColor: '#555555',
  },
  names: {
      marginTop: 15,
      marginBottom: 25, 
  },
  backgroundIcon: {
      backgroundColor: '#ff0'
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
  },
  text : {
    marginLeft : 20,
  }












});