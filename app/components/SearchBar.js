import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <Text> SearchBar </Text>
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'yellow',
  },
  advertisement: {
    height: 80,
    backgroundColor: 'blue',
  },
  products: {
    backgroundColor: 'green',
    flex: 1,
  },
});
