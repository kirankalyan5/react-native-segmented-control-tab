import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'

class ExampleMain extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text>Default segmented control</Text>
            <SegmentedControlTab />
            <Text>Custom segmented control</Text>
            <SegmentedControlTab values={['one', 'two']}
                borderRadius={0}
                tabsContainerStyle={{height: 50, backgroundColor: '#F2F2F2'}}
                tabStyle={{backgroundColor: '#F2F2F2', borderWidth: 0}}
                activeTabStyle={{backgroundColor: 'white', marginTop: 2}}
                tabTextStyle={{color: '#444444', fontWeight: 'bold'}}
                activeTabTextStyle={{color: '#888888'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  }
});

export default ExampleMain
