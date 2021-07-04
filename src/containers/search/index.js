import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Search from './Search';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={'Search'} component={Search} />
    </Stack.Navigator>
  );
}
export default HomeStack;