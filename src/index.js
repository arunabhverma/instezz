import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './containers/home';
import Like from './containers/like';
import Reel from './containers/reel';
import Search from './containers/search';
import User from './containers/user';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import theme from '@theme';
import { s, vs } from '@size';
import faker from 'faker';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  const [state, setState] = useState({
    tabIndex: 0,
    tabBarHeight: 0,
  })


  console.log('%c tabIndex :', 'color: orange; font-weight: bold', state.tabIndex);



  return (
    <NavigationContainer>
      <Tab.Navigator
        // initialRouteName={'Reel'}
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: 'white'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <IoniconsIcons
                  name="home-outline"
                  color={theme.colors.text}
                  size={s(6)}
                // style={{ width: s(6), height: vs(6) }}
                />
                {focused ?
                  <View style={styles.dot} />
                  :
                  null
                }
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <>

                {focused ?
                  <IoniconsIcons
                    name="search-sharp"
                    color={theme.colors.text}
                    size={s(6)}
                  />
                  :
                  <IoniconsIcons
                    name="search"
                    color={theme.colors.text}
                    size={s(6)}
                  />
                }
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Reel"
          component={Reel}
          initialParams={{ tabBarHeight: state.tabBarHeight }}
          options={{
            // tabBarVisible: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused ?

                  <IoniconsIcons
                    name="film"
                    color={theme.colors.text}
                    size={s(6)}
                  />
                  :
                  <IoniconsIcons
                    name="film-outline"
                    color={theme.colors.text}
                    size={s(6)}
                  />
                }
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={Like}
          options={{
            tabBarIcon: ({ focused }) => (
              <>

                {focused ?
                  <IoniconsIcons
                    name="heart"
                    color={theme.colors.instaRed}
                    size={s(6)}
                  />
                  :
                  <IoniconsIcons
                    name="heart-outline"
                    color={theme.colors.text}
                    size={s(6)}
                  />
                }
              </>
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <Image
                  source={{
                    uri: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
                      ['women', 'men'],
                    )
                      }/${faker.datatype.number(60)}.jpg`,
                  }}
                  style={{ width: vs(3), height: vs(3), borderRadius: vs(3) }}
                />
                {
                  focused ?
                    <View style={styles.dot} />
                    :
                    null
                }
              </>
            ),
          }}
        />
      </Tab.Navigator >
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  dot: {
    width: vs(0.6),
    height: vs(0.6),
    backgroundColor: theme.colors.instaRed,
    borderRadius: vs(0.6),
    position: 'absolute',
    bottom: 4,
  }
})
export default AppNavigator;
