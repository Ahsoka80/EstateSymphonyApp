import * as React from 'react';
import { ScrollView, View } from "@gluestack-ui/themed"
import { Card, IconButton, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {

    const navigation = useNavigation();

return(
    <>
        <ScrollView>
            <View style={styles.titleWelcome}>
                <Card style={styles.cardWelcome}>
                    <Card.Content>
                        <Text>Bonjour</Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.containerCard}>

                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.title}>
                            <IconButton
                                icon="calendar"
                                size={80}
                                onPress={() => navigation.navigate('Agendas')}
                            />
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.title}>
                            <IconButton
                                icon="home-plus"
                                size={90}
                                onPress={() => navigation.navigate('Gestion des biens')}
                            />
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.title}>
                            <IconButton
                                icon="view-list"
                                size={90}
                                onPress={() => navigation.navigate('Liste des clients')}
                            />
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.title}>
                            <IconButton
                                icon="account"
                                size={90}
                                onPress={() => navigation.navigate('Profil')}
                            />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    </>
)
}

export default Dashboard;




const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 20,
        width: 150,
        height: 150,
        backgroundColor: 'yellow',
        color: '#fff',
    },
    cardWelcome: {
        width: '100%',
        height: 150,
        marginBottom: 30,
        backgroundColor: 'yellow',
    },
    title: {
        alignItems: 'center',
    },
    titleWelcome: {
        margin: 40,
    }
});