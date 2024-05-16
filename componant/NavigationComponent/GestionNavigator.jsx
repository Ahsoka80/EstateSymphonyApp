import { View, Text } from 'react-native'
import * as React from 'react'

const GestionNavigator = () => {
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

export default GestionNavigator