import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchComp = ({placeholder,style}) => {
    const search=[styles.container,style]
  return (
    <View style={search}>
      <Image source={require('../assets/Search.png')} style={styles.icon} />
      <TextInput placeholder={placeholder} style={styles.input} />
      <View style={styles.divider} />
      <Image source={require('../assets/filter.png')} style={styles.icon1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    paddingVertical: 10,
    borderRadius:12,
  
  },
  icon: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
    alignSelf:"center"
  },
  icon1: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    alignSelf:"center"
  },
  divider: {
    height: 20,
    borderRightWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default SearchComp;
