import React, { useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Linking,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Story from '@containers/home/widgets/Story.js';
import GradientImage from '@components/GradientImage';
import { s, vs } from '@size';
import theme from '@theme';
import Grid from './profileTabs/Grid';
import News from './profileTabs/News';
import Reel from './profileTabs/Reel';
import Posts from './profileTabs/Posts';

const AnothersProfile = (props) => {
  const { route, navigation } = props;
  const { item } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight />
    })
  }, [])

  const HeaderLeft = () => {
    return (
      <View style={styles.headerLeft}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.pop()}>
          <IoniconsIcons
            name="arrow-back-outline"
            color={theme.colors.text}
            size={s(6)}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: s(5), fontSize: s(5), fontWeight: 'bold' }}>
          {item.userId}
        </Text>
        {item.verified ? <Image
          source={require('../../assets/images/blueTick.png')}
          style={{ width: s(4.5), height: s(4.5), marginLeft: s(2), resizeMode: 'center' }}
        /> : null}
      </View >
    );
  }
  const HeaderRight = () => {
    return (
      <View style={styles.headerRight}>
        <TouchableOpacity
          activeOpacity={1}>
          <IoniconsIcons
            name="notifications-outline"
            color={theme.colors.text}
            size={s(6)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}>
          <IoniconsIcons
            name="ellipsis-vertical"
            color={theme.colors.text}
            style={{ marginLeft: s(3) }}
            size={s(5)}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const UserHeader = () => {
    return (
      <View
        style={styles.userValues}>
        <GradientImage
          imageUri={item.image}
          style={styles.feedUserImage}
          linearGradientStyle={styles.feedLinearGradient}
          whiteBorder={styles.feedWhiteBorder}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userTextValue}>{'4,493'}</Text>
          <Text style={styles.userTextKey}>{'Posts'}</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userTextValue}>{'156K'}</Text>
          <Text style={styles.userTextKey}>{'Followers'}</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userTextValue}>{'2,991'}</Text>
          <Text style={styles.userTextKey}>{'Following'}</Text>
        </View>
      </View>
    );
  }

  const UserBio = () => {
    return (
      <View style={styles.userBio}>
        <Text style={styles.userBioText}>
          <Text style={styles.userName}>{item.name}{'\n'}</Text>
          <Text style={styles.userType}>{item.type}{'\n'}</Text>
          {item.bio1}{'\n'}
          {item.bio2}{'\n'}
          {item.bio3}{'\n'}
          <TouchableOpacity onPress={() => Linking.openURL(`https://${item.bio4}`).catch((err) => console.error('An error occurred', err))}>
            <Text style={styles.userWebLink}>{item.bio4}</Text>
          </TouchableOpacity>
          {'\n'}
          <Text style={styles.followDetails}>
            {'Followed by '}
            <Text style={styles.follower}>{item.bio5}</Text>
            {', '}
            <Text style={styles.follower}>{item.bio6}</Text>
            {', and '}
            <Text style={styles.follower}>{'2 others'}</Text>
          </Text>
          {'\n'}
        </Text>
      </View>
    );
  }

  const UserButtonContact = ({ title, onPress, downCaret }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.userButtonContact, { width: title ? s(100) / 3.8 : null, paddingHorizontal: title ? null : s(1) }]}
      >
        {
          title
            ? <Text style={styles.buttonTitle}>{title}</Text>
            : null
        }
        {
          downCaret
            ? <IoniconsIcons
              name="chevron-down-outline"
              color={theme.colors.text}
              size={title ? s(4) : s(6)} />
            : null
        }
      </TouchableOpacity >
    );
  }

  const UserButton = () => {
    return (
      <View style={styles.userButton}>
        <UserButtonContact
          title={'Following'}
          onPress={() => alert('Hello world')}
          downCaret={true}
        />
        <UserButtonContact
          title={'Message'}
          onPress={() => alert('Hello world')}
          downCaret={false}
        />
        <UserButtonContact
          title={'Contact'}
          onPress={() => alert('Hello world')}
          downCaret={false}
        />
        <UserButtonContact
          onPress={() => alert('Hello world')}
          downCaret={true}
        />
      </View>
    );
  }

  const UserStory = () => {
    return (
      <View style={styles.userStory}>
        <Story />
      </View>
    );
  }
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <UserHeader />
      <UserBio />
      <UserButton />
      <UserStory />
      <ProfileTabs />
    </ScrollView>
  );
}

const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          backgroundColor: theme.colors.text,
          height: vs(.1),
          bottom: 1
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Grid") {
            iconName = focused
              ? "grid-outline"
              : "grid-outline"
          }
          else if (route.name === "Reel") {
            iconName = focused
              ? "film-outline"
              : "film-outline"
          }
          else if (route.name === "News") {
            iconName = focused
              ? "newspaper-outline"
              : "newspaper-outline"
          }
          else if (route.name === "Posts") {
            iconName = focused
              ? "reader-outline"
              : "reader-outline"
          }
          return <IoniconsIcons
            name={iconName}
            color={theme.colors.text}
            style={{ opacity: focused ? 1 : 0.3 }}
            size={s(6)}
          />
        }
      }
      )}
    >
      <Tab.Screen name="Grid" component={Grid} />
      <Tab.Screen name="Reel" component={Reel} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator >
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: s(3),
    alignItems: 'center'
  },
  headerLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: s(3)
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.card
  },
  feedUserImage: {
    width: s(20),
    height: s(20),
    borderRadius: s(20),
    overflow: 'hidden',
  },
  feedLinearGradient: {
    width: s(23.4),
    height: s(23.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(23.4),
    marginLeft: s(1),
  },
  feedWhiteBorder: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: s(23),
  },
  userValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: s(3),
    marginTop: s(2),
  },
  userDetails: {
    alignItems: 'center'
  },
  userTextValue: {
    fontSize: s(5),
    fontWeight: '600',
    marginBottom: s(1.3),
  },
  userTextKey: {
    fontSize: s(3.8),
  },
  userBio: {
    marginLeft: s(3),
    marginTop: vs(1.1),
  },
  userBioText: {
    lineHeight: s(5.5),
    fontSize: s(3.8),
    width: s(70),
  },
  userName: {
    fontWeight: '500'
  },
  userType: {
    color: theme.colors.genderBorder,
  },
  userWebLink: {
    color: theme.colors.fbButtonColor,
  },
  follower: {
    fontWeight: '600'
  },
  userButtonContact: {
    flexDirection: 'row',
    paddingVertical: s(.8),
    borderWidth: 1,
    borderColor: theme.colors.genderBorder,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(1),
  },
  userButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(3),
  },
  buttonTitle: {
    fontSize: s(3.8),
    fontWeight: '600',
  },
  userStory: {
    paddingVertical: vs(2)
  }
})
export default AnothersProfile;