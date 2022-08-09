import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
import Home from './src/pages/Home';
import Usuarios from './src/pages/Usuarios';
import Clientes from './src/pages/Clientes';

// Criando variaveis Globais
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator // Tab.Navigator = Cria abas 
    > 
      <Tab.Screen name="Home" component={Home} //name = titulo da aba /  component = arquivo que vai ser acessado apois de clica na aba
      />  
      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="Clientes" component={Clientes} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer // NavigationContainer = Tag responsavel para criar rotas
    >
      <Stack.Navigator initialRouteName="Home"  // Stack.Navigator = responsavel de selecionar a rota que ira ser acessada
      >
        <Stack.Screen  // Stack.Screen = é a rota em si que sera acessada
          name="Home" // nome da rota
          component={Tabs} // Defone o arquivo que vai ser acessado
          options={{ // cria opições 
            title: 'Meu aplicativo', // titulo da opção
            headerStyle: {           // estilo do fundo
              backgroundColor: '#3f64c7',
            },
            headerTintColor: '#FFF', // estilo do texto
          }}
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
