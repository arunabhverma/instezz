import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { s, vs } from '@size';
import DATA from './Data';
import RenderItemStory from './RenderItemStory';
import theme from '../../../theme';

const Story = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.key}
      renderItem={RenderItemStory}
      style={styles.storyCardContainer}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  storyCardContainer: {
    height: vs(14),
    borderBottomColor: theme.colors.infoBorder,
    borderBottomWidth: 1,
  }
})

export default Story;