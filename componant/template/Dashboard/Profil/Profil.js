import { ScrollView, View } from '@gluestack-ui/themed';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, IconButton, MD3Colors, Text, TextInput } from 'react-native-paper';


const Profil = () => {

    const [text, setText] = useState("");

    return (
    
        <ScrollView style={styles.container}>

            <View style={styles.avatar}>
                <Avatar.Text size={100} label="JD" style={styles.backgroundIcon} /> 
                <View style={styles.names}>
                    <Text>Joe Dano</Text>
                    <IconButton
                        icon="pencil"
                        iconColor={MD3Colors.primary0}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View> 
            </View>

            <View style={styles.parametre}>
                <Text>Email :  joe.dano@gmail.com</Text>
            </View>

            <View style={styles.parametre}>
                <Text style={styles.text}>Mot de passe : ********** </Text>               
            </View>

            <Button style= {styles.button} mode="contained" onPress={() => console.log('Pressed')} >
                Se déconnecter
            </Button>

        </ScrollView>
    ) 
        
}

export default Profil


const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    avatar: {
        paddingTop: 20,
        alignItems: 'center',
        
    },
    parametre:{
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        margin: 100,
        backgroundColor: '#555555',
    },
    backgroundIcon: {
        backgroundColor: '#ff0'
    },
    names: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
    }
});