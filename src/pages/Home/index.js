import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text> Home!</Text>
      <StatusBar style="auto" />
      <Button
        title="Usuarios"   // titulo do botão 
        //onPress - vai acinar uma função apois de clica no botão
        onPress={() => navigation.navigate('Usuarios',{nome: 'Br'})} // enviando o valor de uma chave "nome" para a estancia da pagina "Usuarios" 
      ></Button>

    </View>
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
