import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Main from "./Components/Main";
import Coin from "./Components/Coin";
import Portfolio from "./Components/Portfolio";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Coin" component={Coin} />
            <Stack.Screen name="Portfolio" component={Portfolio} />


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
