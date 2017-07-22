import React, { Component, } from 'react'
import {View, Text, AppRegistry} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

const buttonTitles = ["One", "Two", "Three"]
const buttonTitles2 = ["Left", "Middle", "Right"]

export default class ReactNativeWeb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex:0,
      selectedIndex2:0
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlTab values={buttonTitles}
          onTabPress={(index)=>{
            this.setState({selectedIndex:index})
          }}
          selectedIndex={this.state.selectedIndex}
          buttonTypes={["default", "default", "default"]}
          tabStyle={{
            width:100,
            padding:4
          }}
        />
        <View style={{height:10}} />
        <SegmentedControlTab values={buttonTitles2}
          onTabPress={(index)=>{
            this.setState({selectedIndex2:index})
            console.log(index + " tab pressed")
          }}
          selectedIndex={this.state.selectedIndex2}
          buttonTypes={["default", "default", "default"]}
          tabStyle={{
            backgroundColor:"orange",
            padding:4
          }}
          activeTabStyle={{
            backgroundColor:"red"
          }}
        />
      </View>  
    )
  }
}

const styles = {
  container: {
    backgroundColor:'rgb(233,233,233)',
    flex: 1,
    alignItems: 'center',
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', {rootTag:document.getElementById('react-app')})
