# react-native-segmented-control-tab(for Android/iOS)

A react native component with the same concept of react native's SegmantedControlIOS, Primarily built to support both IOS and Android.

## ScreenShots
[![screen1.png](http://s13.postimg.org/hd8b53rd3/screen1.png)](http://postimg.org/image/492qsezb7/)
[![screen2.png](http://s11.postimg.org/onlfshx2r/screen2.png)](http://postimg.org/image/3qp7ntz1r/)

## Install
`npm install react-native-segmented-control-tab --save`

## Usage
```
class ConsumerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }
    render() {
        return (
            <View>
                <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                    selectedIndex={this.state.selected}
                    values={['First', 'Second', 'Third']}
                    onPress= {index => this.setState({selected:index})}
                    />
            </View>)
    }
}
```
## Props
 Name | Description | Default | Type
------|-------------|----------|-----------
values | titles of tabs  | `['One', 'Two', 'Three']` | array
activeColor | color of an active tab item | `#0076FF`| string
inActiveColor | color of an inActive tab item| `white` | string
textActiveColor | text of color in active tab | `#0076FF` | string
borderRadius | borderRadius of whole tab | 5 | number
textInActiveColor | text of color in inactive tab | `white` | string
selected | index of selected tab item | 0 | number
<<<<<<< e3d03580dcd2f012d0bf1b49bfe18abcc3c0da33
tabsContainerStyle | external styles can be passed to override the default styles of the segmentedControl wrapper| null | null
tabStyle | external styles can be passed to override the default styles of the tabs| null | null
tabTitleStyle | external styles can be passed to override the default styles of the tab title| null | null
=======
tabsContainerStyle | external styles can be passed to override the default styles of the segmentedControl wrapper| base styles added check SegmentedControlTab.js  | object(styles)
tabStyle | external styles can be passed to override the default styles of the tabs| base styles added check SegmentedControlTab.js  | object(styles)
tabTitleStyle | external styles can be passed to override the default styles of the tab title| base styles added check SegmentedControlTab.js  | object(styles)
>>>>>>> updated the readme.md
onPress | call-back function for each item | () => {} | func

## License
*MIT*
