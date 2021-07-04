import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { s, vs } from '@size';
import DATA from '../widgets/Data';

const Grid = () => {

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.grid}>
        <Image source={{ uri: item.bgImage }} style={{ flex: 1 }} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {DATA.map((data, index) => <RenderItem item={data} key={index} />)}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  grid: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: s(100 / 3),
    height: s(100 / 3),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
  },
})
export default Grid;