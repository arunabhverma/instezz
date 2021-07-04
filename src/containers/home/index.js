import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { s, vs } from '@size';
import theme from '@theme';
import Home from './Home';
import Chat from './Chat';
import AnothersProfile from './AnothersProfile';
// import Login from '../login/index';

const Stack = createStackNavigator();

const HomeStack = () => {
  const [state, setState] = React.useState({
    rootNav: null,
  })
  const HeaderIcons = ({ right, navigation, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ marginHorizontal: s(3) }}>
        <IoniconsIcons
          name={
            right
              ? "chatbubble-ellipses-outline"
              : "duplicate-outline"
          }
          color={theme.colors.text}
          size={s(6)}
        />
      </TouchableOpacity>
    );
  }
  return (
    <Stack.Navigator
    >
      <Stack.Screen options={({ navigation }) => ({
        headerRight: () => <HeaderIcons navigation={navigation} right={true} onPress={() => navigation.navigate('Chat')} />,
        headerLeft: () => <HeaderIcons navigation={navigation} onPress={() => navigation.navigate('Home')} />,
        gestureEnabled: true
      })} name={'Instezz'} component={Home} />
      <Stack.Screen options={{ gestureEnabled: true }} name={'Chat'} component={Chat} />
      <Stack.Screen
        options={{
          gestureEnabled: true,
        }}
        name={'AnothersProfile'}
        component={AnothersProfile} />
    </Stack.Navigator>
  );
}
export default HomeStack;