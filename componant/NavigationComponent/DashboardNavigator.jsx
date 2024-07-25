import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../template/Dashboard/Dashboard';
import Profil from '../template/Dashboard/Profil/Profil';
import Gestion from '../template/Dashboard/Gestion des biens/Gestion';
import ListesClients from '../template/Dashboard/Listes Clients/ListesClients';
import AgendasNavigator from './AgendasNavigator';



const Stack = createNativeStackNavigator()

const DashboardNavigator = () => {
const [isAgendas, setIsAgendas] = useState(true)

  return (
    <Stack.Navigator>
        <Stack.Screen name='Accueil'component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name='AgendasNavigator'  options={{headerShown: isAgendas, title: 'Agendas'}}>
        {() => <AgendasNavigator setIsAgendas={setIsAgendas}/>}
        </Stack.Screen>
        <Stack.Screen name='Gestion des biens' component={Gestion}/>
        <Stack.Screen name='Liste des clients' component={ListesClients}/>
        <Stack.Screen name='Profil'component={Profil} />
    </Stack.Navigator>
  )
}

export default DashboardNavigator