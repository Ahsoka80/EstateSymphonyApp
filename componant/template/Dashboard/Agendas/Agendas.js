import {  View } from '@gluestack-ui/themed';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useState }from 'react';
import { StyleSheet } from "react-native";
import {  Agenda, LocaleConfig } from 'react-native-calendars';
import { IconButton, MD3Colors, Text } from 'react-native-paper';

const localeConfig = {
    name: 'fr',
    config: {
      monthNames: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      monthNamesShort: [
        'Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 
        'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'
      ],
      dayNames: [
        'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
      ],
      dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
      today: 'Aujourd\'hui'
    }
  };
  
LocaleConfig.locales['fr'] = localeConfig.config;
LocaleConfig.defaultLocale = 'fr';

const Agendas = ({setIsAgendas}) => {
    const isFocus = useIsFocused()
    if (isFocus ) {
        setIsAgendas(true)
      }
    const[items, setItems] = useState({
            '2024-06-25': [{title: 'Titre 1', name: 'item 1', hour: '10h00 - 11h'}],
            '2024-06-26': [
                {title: 'Titre 2', name: 'item 2', hour: '10h00 - 11h00'} , 
                {title: 'Titre 2 bis', name: 'item 2 bis', hour: '14h00 - 16h00'},
                {title: 'Titre 2 bis2', name: 'item 2 bis2', hour: '16h00 - 18h00'},
            ],
            '2024-06-27': [{title: 'Titre 3', name: 'item 3', hour: '10h00 - 11h'}],
            '2024-06-20': [{title: 'Titre 4', name: 'item 4', hour: '10h00 - 11h'}],
            '2024-06-21': [{title: 'Titre 5', name: 'item 5', hour: '10h00 - 11h'}],
            '2024-06-24': [{title: 'Titre 6', name: 'item 6', hour: '10h00 - 11h'}],
            '2024-07-01': [{title: 'Titre 7', name: 'item 7', hour: '10h00 - 11h'}],
    })

    const renderItem=(item) => {
        return (
            <View style={styles.container}>
                <Text>{item.title}</Text>
                <Text>{item.name}</Text>
                <Text>{item.hour}</Text>
            </View>
        )
    }
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={items}
                renderItem={renderItem}
                pastScrollRange = { 0 } 
                theme={{
                    agendaDayTextColor: 'grey',
                    agendaDayNumColor: 'grey',
                    agendaTodayColor: 'blue',
                    agendaKnobColor: 'grey'
                }}
            />

            <IconButton
                icon="calendar-plus" 
                iconColor={MD3Colors.secondary100}
                size={35}
                style={styles.fab}
                onPress={() => navigation.navigate('Ajout de rendez-vous')}
            />
            
        </View>
    )
}

export default Agendas

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        color: 'grey',
        padding: 10,
        marginRight: 10,
        marginTop:25,
        borderRadius: 5
    },
    modal: {
        flex: 2,
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        backgroundColor: '#555555',
    },
    
})