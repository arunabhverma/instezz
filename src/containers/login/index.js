import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
// import Login from './login'
import Signup from './signUp'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../home/Home';

const Stack = createStackNavigator();

const LoginStack = ({ navigation, route }) => {
  console.log('route from Login Stack', navigation)
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={'Signup'} component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default LoginStack;