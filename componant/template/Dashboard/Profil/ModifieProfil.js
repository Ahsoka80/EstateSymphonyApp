import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Input, InputField, ScrollView } from '@gluestack-ui/themed'
import { Avatar, Button, IconButton, MD3Colors, TextInput } from 'react-native-paper'
import { useState } from 'react'

const ModifieProfil = () => {

    const [text, setText] = useState("");

  return (
    <ScrollView style={styles.container}>
            
            <View style={styles.avatar}>
                <Avatar.Text size={100} label="AB" style={styles.backgroundIcon} />
            </View>
            <View style={styles.parametre}>
                <Text>Nom : </Text>
                <Input
                    variant="underlined"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField style={styles.border} placeholder="Enter Text here" />
                </Input>
            </View>
            <View style={styles.parametre}>
                <Text>Prénom : </Text>
                <Input
                    variant="underlined"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField style={styles.border} placeholder="Enter Text here" />
                </Input>
            </View>
            
            <View style={styles.parametre}>
                <Text>Email : </Text>
                <Input
                    variant="underlined"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField style={styles.border} placeholder="Enter Text here" />
                </Input>
            </View>

            <View style={styles.parametre}>
                <Text>Password : </Text>
                <Input
                    variant="underlined"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField style={styles.border} placeholder="Enter Text here" />
                </Input>
            </View>

            <Button style= {styles.button} mode="contained" onPress={() => console.log('Pressed')} >
                    Modifier
            </Button>

        </ScrollView>
  )
}

export default ModifieProfil


const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    avatar: {
        paddingTop: 35,
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
    border:{
        border: 10,
        borderColor: 'black',
    }
});