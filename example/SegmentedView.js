/* @flow */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

class SegmentedView extends Component<*, *> {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
    }
  }

    handleSingleIndexSelect = (index: number) => {
      this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    }

    handleMultipleIndexSelect = (index: number) => {
      const { selectedIndices } = this.state

      if (selectedIndices.includes(index)) {
        this.setState(prevState => ({
          ...prevState,
          selectedIndices: selectedIndices.filter((i) => i !== index),
        }))
      } else {
        this.setState(prevState => ({
          ...prevState,
          selectedIndices: [
            ...selectedIndices,
            index,
          ],
        }))
      }
    }

    handleCustomIndexSelect = (index: number) => {
      this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    }

    render() {
      const { selectedIndex, selectedIndices, customStyleIndex } = this.state
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Default segmented control with single selection</Text>
          <SegmentedControlTab
            selectedIndex={selectedIndex}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            onTabPress={this.handleSingleIndexSelect}
          />
          <View style={styles.Seperator} />
          <Text style={styles.headerText}>Default segmented control with multiple selection</Text>
          <SegmentedControlTab
            multiple
            selectedIndices={selectedIndices}
            onTabPress={this.handleMultipleIndexSelect}
          />
          <View style={styles.Seperator} />
          <Text style={styles.headerText}>Default segmented with badges</Text>
          <SegmentedControlTab
            badges={[1, 2, 3]}
            selectedIndex={selectedIndex}
            onTabPress={this.handleSingleIndexSelect}
          />
          <View style={styles.Seperator} />
          <Text style={styles.headerText}>Custom segmented control with custom styles</Text>
          <SegmentedControlTab
            values={['one', 'two']}
            selectedIndex={customStyleIndex}
            onTabPress={this.handleCustomIndexSelect}
            borderRadius={0}
            tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
            tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
            activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
            tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
            activeTabTextStyle={{ color: '#888888' }}
          />
          {customStyleIndex === 0
                    && <Text style={styles.tabContent}> Tab one</Text>}
          {customStyleIndex === 1
                    && <Text style={styles.tabContent}> Tab two</Text>}

        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  tabViewText: {
    color: '#444444',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 18,
  },
  titleText: {
    color: '#444444',
    padding: 20,
    fontSize: 14,
    fontWeight: '500',
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  tabTextStyle: {
    color: '#D52C43',
  },

})


export default SegmentedView
