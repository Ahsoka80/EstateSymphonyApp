import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { ButtonText } from '@gluestack-ui/themed';

const ConnexionEstimation = () => {
    return (
        <View style={styles.container}>
            <Text>Vous voulez estimer votre biens ? </Text>
            <Button style= {styles.styleButton} mode="contained" onPress={() => console.log('Pressed')} >
                    Se connecter
            </Button>
            
        </View>
    )
}

export default ConnexionEstimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButton: {
        marginTop: 20,
        backgroundColor: '#555555',
    },
})
