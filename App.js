import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import FPasswordPage from './src/pages/FPasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='FPasswordPage' component={FPasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
  },

  cards: {
    padding: '20px',
  },

  rodape: {
    padding: '10px',
  },
});
