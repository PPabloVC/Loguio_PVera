import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder</Text>
      <Text> Loguio Travel app</Text>
      <Text> Pablo Vera</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80a62f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
