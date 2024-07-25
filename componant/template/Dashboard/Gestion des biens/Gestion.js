import { View, StyleSheet, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { FlatList, ScrollView } from '@gluestack-ui/themed'
import { getPropertiesArchived, getPropertiesByStatus } from '../../../../utils/api/properties';
import { getAllProperties } from '../../../../utils/api/properties';
import { Card, Searchbar, Title } from 'react-native-paper';
import { useState } from 'react';
import { useEffect } from 'react';

const data2 = [
    { id: '1', title: 'Profil', icon: 'account', screen: 'Profil' },
    { id: '2', title: 'Card 1', screen: 'Card1' },
    { id: '3', title: 'Card 2', screen: 'Card2' },
    { id: '4', title: 'Card 3', screen: 'Card3' },
];

const Gestion = () => {

  const [searchQuery, setSearchQuery] = React.useState(''); 

  const [properties, setAllProperties] = useState([]);
  const [propertiesByStatus, setPropertiesByStatus] = useState([]);

  useEffect(() => {
      getAllProperties()
      .then(data => { 
        setAllProperties(data) 
      });
  }, []);
    
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.price}</Title>
      </Card.Content>
    </Card>
  );
  
    return (
      <ScrollView style={styles.container}>
        <Searchbar
          style={styles.search}
          placeholder="Rechercher un bien"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <FlatList
          data={properties}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Assurez-vous que 'id' est une chaîne de caractères
        />
    </ScrollView>
    );
  };
  

export default Gestion

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    card: {
      margin: 20
    },
    search: {
      margin: 20,
      backgroundColor: '#ff0',
      color: '#555555',
    }
    
  });