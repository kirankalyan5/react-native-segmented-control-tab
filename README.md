# react-native-segmented-control-tab(for Android/iOS) 🚀

[![npm](https://img.shields.io/npm/v/react-native-segmented-control-tab.svg?style=flat-square "npm version")](https://www.npmjs.com/package/react-native-segmented-control-tab)




A react native component with the same concept of react native's SegmantedControlIOS, Primarily built to support both IOS and Android. 💡

## ScreenShots
[![screen1.png](http://s13.postimg.org/hd8b53rd3/screen1.png)](http://postimg.org/image/492qsezb7/)
[![screen2.png](http://s11.postimg.org/onlfshx2r/screen2.png)](http://postimg.org/image/3qp7ntz1r/)

## Install
`npm install react-native-segmented-control-tab --save`

## Usage
```
import SegmentedControlTab from 'react-native-segmented-control-tab'

class ConsumerComponent extends Component {

    render() {
        return (
            <View>
                <SegmentedControlTab
                    values={['First', 'Second', 'Third']}
                    onTabPress= {index => console.log(index))}
                    />
            </View>)
    }
}
```
## Props
 Name | Description | Default | Type
------|-------------|----------|-----------
values | titles of tabs  | `['One', 'Two', 'Three']` | array
selectedIndex | index of tab item to be selected initially| 0 | number
multiple | Boolean which enables the multiple selection option | false | bool
selectedIndices |Array of indices of tab items to be selected initially - when multiple prop is true else it will take selectedIndex| [0] | arrayOf(PropTypes.number)
borderRadius | borderRadius of whole tab | 5 | number
tabsContainerStyle | external styles can be passed to override the default styles of the segmentedControl wrapper| base styles added in SegmentedControlTab.js  | object(styles)
tabStyle | external styles can be passed to override the default styles of the tabs| base styles added in SegmentedControlTab.js  | object(styles)
tabTextStyle | external styles can be passed to override the default styles of the tab title| base styles added in SegmentedControlTab.js  | object(styles)
activeTabStyle | external styles can be passed to override the default styles of the active tab| base styles added in SegmentedControlTab.js  | object(styles)
activeTabTextStyle | external styles can be passed to override the default styles of the active tab text| base styles added in SegmentedControlTab.js  | object(styles)
onTabPress | call-back function for each item | () => {} | func

## Custom styling
  ```
      <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          selectedIndex={1}
          values={['First', 'Second', 'Third']}
          onPress= {index => this.setState({selected:index})}
          />

      const styles = StyleSheet.create({
          tabsContainerStyle: {
            //custom styles
          },
          tabStyle: {
            //custom styles
            },
          tabTextStyle: {
            //custom styles
          },
          activeTabStyle: {
            //custom styles
            },
          activeTabTextStyle: {
            //custom styles
          },

      })

  ```

## P.S.
🙏 credits to all the other devs who had built the similar concept, had referred some of the their components on the github, to get a fair idea 💡 to build this.😊
If you have any idea in implementing this further, let me know or you can update it and raise a PR.😊🚀

## License
*MIT*

