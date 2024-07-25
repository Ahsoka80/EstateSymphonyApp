import { View, Text, Share } from 'react-native'
import React from 'react'

const EspacePropriétaire = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <TouchableOpacity>
        <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={styles.textCard}>
          <View style={styles.textCardRight}>
            <Text variant="titleLarge">500 € cc</Text>
            <Text variant="bodyMedium">Studio</Text>
            <Text variant="bodyMedium">1 pièce • 20 m² </Text>
            <Text variant="bodyMedium">Saint-Leu</Text>
            <View style={styles.iconLeft}>
              <Card.Actions>
                <IconButton icon="share"
                  onPress={onShare}
                />
              </Card.Actions>
            </View>
          </View>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
  

  return (
    <View>

      <Text> Vos Estimations : </Text>
      <Text>Flatlist mettre en place avec l'API</Text>

      <Text> Les annonces publiés : </Text>
      <Text>Flatlist mettre en place avec l'API</Text>

      <Text> Vos contrats en cours : </Text>
      <Text>Flatlist mettre en place avec l'API</Text>

    </View>
  )
}

export default EspacePropriétaire