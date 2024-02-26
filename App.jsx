// Responsável por gerenciar a navegação
import { NavigationContainer } from '@react-navigation/native';

// Responsável por criar a navegação em pilha
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native-web';

import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import Profile from './src/screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} options = {{
          title: "Tela Inicial",
          headerStyle: {
            backgroundColor: "pink"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          // headerShown: false,
        }}/>
        <Stack.Screen name="Contato" component={Contact} />
        <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
