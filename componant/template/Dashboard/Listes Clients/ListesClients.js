import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { ScrollView } from '@gluestack-ui/themed';

const ListesClients = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Rechercher un client"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text>ListesClients</Text>
    </ScrollView>
  )
}

export default ListesClients

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    margin: 20,
    backgroundColor: '#ff0',
    color: '#555555',
  }
})