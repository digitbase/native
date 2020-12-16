import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
    };
  }

  _searchInput(e) {
    this.setState({
      searchVal: e,
    });
    // console.log(this.state);
  }

  _searchClick() {
    console.log(this.state);
  }
  render() {
    let that = this.state;
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={that.searchVal}
          placeholder="搜索"
          onChangeText={(e) => this._searchInput(e)}
        />
        <Button
          title="搜索"
          style={styles.searchBtn}
          onPress={(e) => this._searchClick()}
        />
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
    paddingHorizontal: 10,

    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    lineHeight: 12,
    fontSize: 12,
  },
  searchBtn: {
    width: 40,
  },
});
