import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Agendas from '../template/Dashboard/Agendas/Agendas'
import AddRdv from '../template/Dashboard/Agendas/AddRdv'

const Stack = createNativeStackNavigator()

const AgendasNavigator = ({setIsAgendas}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Agendas' options={{ headerShown: false }}>
          {()=><Agendas setIsAgendas={setIsAgendas}/>}
        </Stack.Screen>
        <Stack.Screen name='Ajout de rendez-vous'>
        {()=><AddRdv setIsAgendas={setIsAgendas}/>}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AgendasNavigator