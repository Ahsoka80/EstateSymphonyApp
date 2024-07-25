import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfilConnecté from '../template/Connexion/Profil/ProfilConnecté'
import Compte from '../template/Connexion/Profil/Compte'
import EspaceLocataire from '../template/Connexion/Profil/EspaceLocataire'
import EspacePropriétaire from '../template/Connexion/Profil/EspacePropriétaire'
import Favories from '../template/Connexion/Profil/Favories'

const Stack = createNativeStackNavigator()

const ProfilNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='AccueilProfil'component={ProfilConnecté} options={{ headerShown: false , title: 'Profil'}}/>
        <Stack.Screen name='Compte' component={Compte}/>
        <Stack.Screen name='EspaceLocataire' component={EspaceLocataire}/>
        <Stack.Screen name='EspacePropriétaire' component={EspacePropriétaire}/>
        <Stack.Screen name='Favories' component={Favories}/>
    </Stack.Navigator>
  )
}

export default ProfilNavigator