import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Usuarios({route}) { // parametro que recebe valor da chaves enviado para pagina
  return (
    <View style={styles.container}>
      <Text>Dev: {route.params?.nome}</Text>{/**acessando conteudo enviado para pagina */}  
      <StatusBar style="auto" />
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
