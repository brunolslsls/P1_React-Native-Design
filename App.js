import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './src/pages/Home';
import Usuarios from './src/pages/Usuarios';
import Clientes from './src/pages/Clientes';

// Criando variaveis Globais
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator // Tab.Navigator = Cria Guias 
      screenOptions={({ route }) => ({ // screenOptions = serve para connfigura a rota
        tabBarIcon: ({ focused, color, size }) => { // tabBarIcon =  configuração os icones (estado de Focou, cor, tamanho )
          let iconName;

          if (route.name === 'Home') {  // verifica se estamos na pagina do "Home"
            iconName = focused          // verifica se esta focado, uma variavel recebe foco e depois ver se é true ou false
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Usuarios') {// verifica se estamos na pagina do "Usuarios"
            iconName = focused ? 'bug-outline' : 'bug';
          } else if (route.name === 'Clientes') {// verifica se estamos na pagina do "Clientes"
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          }

          // abaixo pode configura tamanho e cor dos icones  (valor , texto)
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // se a guia esta ativa coloca essa cor
        tabBarInactiveTintColor: 'gray', // se a guia esta Desativada coloca essa cor
      })}
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
