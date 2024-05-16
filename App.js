import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import ButtonNavigation from './componant/buttonNavigation/ButtonNavigation';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>
          <ButtonNavigation/>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
