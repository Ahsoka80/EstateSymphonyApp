import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import BottomNavigationApp from './componant/buttonNavigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>
          <BottomNavigationApp/>
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
