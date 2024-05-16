import { View, StyleSheet, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { FlatList } from '@gluestack-ui/themed'
import { getPropertiesArchived, getPropertiesByStatus } from '../../../../utils/api/properties';
import { getAllProperties } from '../../../../utils/api/properties';
import { Card, Title } from 'react-native-paper';
import { useState } from 'react';
import { useEffect } from 'react';

const data2 = [
    { id: '1', title: 'Profil', icon: 'account', screen: 'Profil' },
    { id: '2', title: 'Card 1', screen: 'Card1' },
    { id: '3', title: 'Card 2', screen: 'Card2' },
    { id: '4', title: 'Card 3', screen: 'Card3' },
];

const Gestion = () => {

    const [properties, setAllProperties] = useState([]);
    const [propertiesByStatus, setPropertiesByStatus] = useState([]);

    useEffect(() => {
        getAllProperties().then(data => { setAllProperties(data) });
    }, []);
    
    
    const renderItem = ({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.price}</Title>
            </Card.Content>
          </Card>
    )
  return (
    <View >
       <FlatList
            data={properties}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    </View>
  )
}

export default Gestion

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ff0',
    },
  });