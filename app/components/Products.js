import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Products extends Component {
  render() {
    return (
      <View style={styles.products}>
        <Text> Products </Text>
      </View>
    );
  }
}

export default Products;

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
