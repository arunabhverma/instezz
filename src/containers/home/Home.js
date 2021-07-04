import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import DATA from './widgets/Data';
import Story from './widgets/Story';
import theme from '../../theme';
import RenderItemFeed from './widgets/RenderItemFeed';

const Home = ({ navigation }) => {

  const [state, setState] = useState({
    like: false,
  })
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        ListHeaderComponent={<Story />}
        keyExtractor={item => item.key}
        renderItem={(props) => RenderItemFeed({ state, setState, props, navigation })}
        contentContainerStyle={styles.feedCardContainer}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
  },
});

export default Home;
