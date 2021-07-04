import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { s, vs } from '@size';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import theme from '@theme';
import Reels from './Reels';

const Stack = createStackNavigator();

const HomeStack = () => {
  // const ReelHeader = () => {
  //   return (
  //     <View style={styles.headerContainer}>
  //       <LinearGradient
  //         colors={['rgba(0,0,0,0.9)', 'transparent']}
  //         style={styles.linearGradientStyles}>
  //         <Text style={styles.headerText}>
  //           Reels
  //       </Text>
  //         <TouchableOpacity onPress={() => alert('Nothing is added')}>
  //           <IoniconsIcons
  //             name={'camera-outline'}
  //             size={s(7)}
  //             color={theme.colors.card}
  //           />
  //         </TouchableOpacity>
  //       </LinearGradient>
  //     </View>
  //   );
  // }
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Reels'} component={Reels} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: s(100),
    height: vs(15),
  },
  linearGradientStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(3),
    alignItems: 'center'
  },
  headerText: {
    color: theme.colors.card,
    fontSize: s(6),
    fontWeight: '600'
  }
})

export default HomeStack;