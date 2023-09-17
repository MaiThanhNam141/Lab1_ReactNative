import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab1 from './src/Lab1';
import Lab2 from './src/Lab2';
import Lab3 from './src/Lab3';
import Lab4 from './src/Lab4';
import Lab5 from './src/Lab5';
import Lab6 from './src/Lab6';
import Lab7 from './src/Lab7';
import Lab8 from './src/Lab8';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Lab1 />
      <Lab2 />
      <Lab3 /> 
      <Lab4 />
      <Lab5 />
      <Lab6 />
      <Lab7 />*/}
      <Lab8 />
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
