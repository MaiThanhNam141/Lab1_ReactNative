// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/HomeScreen';
// import DetailsScreen from './src/Detail';
// import Lab1 from './src/Lab1';
// import Lab2 from './src/Lab2';
// import Lab3 from './src/Lab3';
// import Lab4 from './src/Lab4';
// import Lab5 from './src/Lab5';
// import Lab6 from './src/Lab6';
// import Lab7 from './src/Lab7';
// import Lab8 from './src/Lab8';
// import Calyculator from './src/Calyculator'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Lab1 />
//       <Lab2 />
//       <Lab3 /> 
//       <Lab4 />
//       <Lab5 />
//       <Lab6 />
//       <Lab7 />
//       <Lab8 /> 
//       <Calyculator></Calyculator>*/}


//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import HomeScreen from './src/HomeScreen';
import Detail from './src/Detail';
import CustomNavigationBar from './src/CustomNavigationBar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator} from '@react-navigation/stack'; 
import { PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();
const App=() => {
return (
  <PaperProvider>
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar{...props} />,  
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={Detail} /> 
        </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);}

App.defaultProps = {
  fallback: 'Em chịu thua',
};
export default App;