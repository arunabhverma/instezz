import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { s, vs } from '@size';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import faker from 'faker';
import theme from '../../theme';
import DATA from '../home/widgets/Data';

const Search = () => {
  const GridsImage = ({ item, styles }) => {
    return (
      <Image source={{
        uri: `https://picsum.photos/300/500?random=/${faker.datatype.number(
          60,
        )}.jpg`
      }}
        resizeMode={'cover'}
        style={styles}
      />
    );
  }

  const Gallery = ({ item, index }) => {
    return (
      <View style={styles.galleryGrid}>
        <View style={styles.gridOne}>
          <View style={{ flex: 1 }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
          <GridsImage item={item} styles={styles.imageSizeBig} />
        </View>
        <View style={styles.gridTwo}>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
        </View>
        <View style={styles.gridOne}>
          <GridsImage item={item} styles={styles.imageSizeBig} />
          <View style={{ flex: 1 }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
        </View>
        <View style={styles.gridTwo}>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
            <GridsImage item={item} styles={styles.imageSize} />
          </View>
        </View>
      </View >
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{
          flexDirection: 'row',
          marginHorizontal: s(3),
          paddingTop: vs(1),
          paddingBottom: 0,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={styles.search}>
            <IoniconsIcons
              name="search-outline"
              color={theme.colors.genderBorder}
              size={s(5)}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              fontSize={s(4)}
              placeholder={'Search'}
              placeholderTextColor={theme.colors.genderBorder}
            />
          </View>
          {/* <View style={{
            width: s(15),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <IoniconsIcons
              name="grid-outline"
              color={theme.colors.text}
              size={s(5)}
            />
          </View> */}
        </View>
        <View style={styles.gallery}>
          <FlatList
            data={DATA}
            renderItem={Gallery}
          // keyExtractor={({ index }) => index.toString}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 1,
    backgroundColor: theme.colors.infoBorder,
    flexDirection: 'row',
    alignItems: 'center',
    height: vs(5),
    borderRadius: s(2),
  },
  searchIcon: {
    // width: s(6),
    // height: vs(5),
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: s(3),
  },
  searchInput: {
    // backgroundColor: 'yellow',
    alignItems: 'center'
  },
  gallery: {
    flex: 1,
    marginTop: s(4)
  },
  galleryGrid: {
    // backgroundColor: 'blue',
    // height: vs(30),
  },
  gridOne: {
    flexDirection: 'row',
    height: vs(30)
  },
  gridTwo: {
    height: vs(30)
  },
  imageSize: {
    flex: 1,
    borderWidth: 1.7,
    borderColor: 'white',
  },
  imageSizeBig: {
    flex: 2,
    borderWidth: 1.7,
    borderColor: 'white',
  }
})
export default Search;