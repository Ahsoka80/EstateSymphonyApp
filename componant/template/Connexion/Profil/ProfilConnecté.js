import { SafeAreaView, View, StyleSheet, Text } from "react-native"
import { Avatar, Card, IconButton, Button } from 'react-native-paper';
import * as React from 'react';

const ProfilConnecté = () => {
    return (
        <View style={styles.avatar}>
            
            <Avatar.Text size={100} label="AB" style={styles.backgroundIcon} />

            <Text style={styles.names}>Prénom Nom</Text>

            <Card style={styles.card}>
                <Card.Title
                    title="Gérer mon compte"
                    subtitle="E-mail, mot de passe"
                    left={(props) => <Avatar.Icon {...props} icon="account" style={styles.backgroundIcon} />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                />
            </Card>
            <Card style={styles.card}>
                <Card.Title
                    title="Espaces propriétaire"
                    subtitle="Estimation, annonces déposées et contats"
                    left={(props) => <Avatar.Icon {...props} icon="key" style={styles.backgroundIcon} />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                />
            </Card>
            <Card style={styles.card}>    
                <Card.Title
                    title="Espaces locataire"
                    subtitle="Profil locataire"
                    left={(props) => <Avatar.Icon {...props} icon="folder" style={styles.backgroundIcon} />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                />
            </Card>
            <Card style={styles.card}>
                <Card.Title
                    title="Favori"
                    subtitle="Biens immobiliers favories"
                    left={(props) => <Avatar.Icon {...props} icon="transition" style={styles.backgroundIcon} />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                />
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
      
    },
    avatar: {
        marginBottom: 20,
        alignItems: 'center',
        paddingTop: 20,
    },
    card: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff', // couleur de fond des cartes
        width: 400,
        borderRadius: 10, // bord arrondi
        elevation: 2, // ombre
    },
    button: {
        marginTop: 50,
        marginBottom: 105,
        backgroundColor: '#555555',
    },
    names: {
        marginTop: 30,
        marginBottom: 50, 
    },
    backgroundIcon: {
        backgroundColor: '#ff0'
    }
});