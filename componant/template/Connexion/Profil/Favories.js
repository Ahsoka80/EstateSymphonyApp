import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from '@gluestack-ui/themed'

const Favories = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Vos Favoris</Text>

      <Text>Flatlist mettre en place avec l'API</Text>

    </View>
  )
}

export default Favories


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text : {
    marginTop: 20,
    marginLeft : 150,
  }
})