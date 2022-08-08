import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';


import Usuarios from './src/pages/Usuarios';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer // NavigationContainer = Tag responsavel para criar rotas
    >
      <Stack.Navigator initialRouteName="Home"  // Stack.Navigator = responsavel de selecionar a rota que ira ser acessada
      >
        <Stack.Screen  // Stack.Screen = é a rota em si que sera acessada
          name="Home" // nome da rota
          component={Home} // Defone o arquivo que vai ser acessado
        />
        <Stack.Screen name="Usuarios" component={Usuarios} />
      </Stack.Navigator>
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
