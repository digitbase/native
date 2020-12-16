/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as myComponents from './app/components';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        animated={true}
        backgroundColor={'red'}
      />
      <SafeAreaView style={styles.container}>
        <myComponents.SearchBar />
        <myComponents.Advertisement />
        <myComponents.Products />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
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

export default App;
