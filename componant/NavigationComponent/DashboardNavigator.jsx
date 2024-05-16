import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../template/Dashboard/Dashboard'
import Profil from '../template/Dashboard/Profil/Profil'
import Agendas from '../template/Dashboard/Agendas/Agendas'
import Gestion from '../template/Dashboard/Gestion des biens/Gestion'
import ListesClients from '../template/Dashboard/Listes Clients/ListesClients'


const Stack = createNativeStackNavigator()

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Accueil'component={Dashboard}/>
        <Stack.Screen name='Agendas' component={Agendas}/>
        <Stack.Screen name='Gestion des biens' component={Gestion}/>
        <Stack.Screen name='Liste des clients' component={ListesClients}/>
        <Stack.Screen name='Profil' component={Profil}/>
    </Stack.Navigator>
  )
}

export default DashboardNavigator