import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Avatar, Card, IconButton, Button } from 'react-native-paper';
import * as React from 'react';
import { useNavigation } from "@react-navigation/native";

const ProfilConnecté = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.avatar}>
            
            <Avatar.Text size={100} label="AB" style={styles.backgroundIcon} />

            <Text style={styles.names}>Prénom Nom</Text>

            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Compte')}
                >
                    <Card.Title
                        title="Gérer mon compte"
                        subtitle="E-mail, mot de passe"
                        left={(props) => <Avatar.Icon {...props} icon="account" style={styles.backgroundIcon} />}
                    />
                </TouchableOpacity>
            </Card>
            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EspacePropriétaire')}
                >
                    <Card.Title
                        title="Espaces propriétaire"
                        subtitle="Estimation, annonces déposées et contrats"
                        left={(props) => <Avatar.Icon {...props} icon="key" style={styles.backgroundIcon} />}
                    />
                </TouchableOpacity>
            </Card>
            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EspaceLocataire')}
                >
                    <Card.Title
                        title="Espaces locataire"
                        subtitle="Profil locataire"
                        left={(props) => <Avatar.Icon {...props} icon="folder" style={styles.backgroundIcon} />}
                    />
                </TouchableOpacity>  
                
            </Card>
            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Favories')}
                >
                    <Card.Title
                        title="Favori"
                        subtitle="Biens immobiliers favories"
                        left={(props) => <Avatar.Icon {...props} icon="transition" style={styles.backgroundIcon} />}
                    />
                </TouchableOpacity> 
            </Card>
            <Button style= {styles.button} mode="contained" onPress={() => console.log('Pressed')} >
                    Se déconnecter
            </Button>
        </View>
        
    )
}

export default ProfilConnecté



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
      
    },
    avatar: {
        alignItems: 'center',
        paddingTop: 20,
    },
    card: {
        marginBottom: 20,
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
    }
});