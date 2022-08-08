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
        title='Usuarios'
        onPress={() => navigation.navigate('Usuarios')}
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
