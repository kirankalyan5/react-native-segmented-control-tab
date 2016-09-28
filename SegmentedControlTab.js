import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

class SegmentedControlTab extends Component {

    constructor(props) {
        super(props)
        this.onTabPress = this.onTabPress.bind(this)
        this.state = {
            selectedIndex: this.props.selectedIndex
        }
    }

    onTabPress(index) {
        this.setState({
            selectedIndex: index
        }, () => this.props.onTabPress(index))
    }

    renderTabOption(tab, index) {
        const {values, borderRadius} = this.props
        const isTabActive = this.state.selectedIndex === index
        const firstTabStyle = index === 0 ? [{ borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }] : {}
        const lastTabStyle = index === values.length - 1 ? [{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }] : {}

        return (
            <TouchableOpacity style={[styles.tabStyle,
                this.props.tabStyle,
                isTabActive ? styles.activeTabStyle : {},
                isTabActive ? this.props.activeTabStyle : {},
                firstTabStyle,
                lastTabStyle]}
                key={index}
                onPress={() => this.onTabPress(index) }
                activeOpacity={1}>
                <Text style={[styles.textStyle,
                    this.props.tabTextStyle,
                    isTabActive ? styles.activeTabTextStyle : {},
                    isTabActive ? this.props.activeTabTextStyle : {}]}>{tab}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {values} = this.props
        return (
            <View style={[styles.tabsContainerStyle, this.props.tabsContainerStyle]}
                removeClippedSubviews={true}>
                {values.map((item, index) => this.renderTabOption(item, index)) }
            </View>
        )
    }
}

SegmentedControlTab.propTypes = Object.assign({}, Component.propTypes, {
    values: PropTypes.array,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    tabsContainerStyle: View.propTypes.style,
    tabStyle: View.propTypes.style,
    activeTabStyle: View.propTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    borderRadius: PropTypes.number
})

SegmentedControlTab.defaultProps = Object.assign({}, Component.propTypes, {
    values: ['One', 'Two', 'Three'],
    selectedIndex: 0,
    onTabPress() { },
    tabsContainerStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    textStyle: {},
    activeTextStyle: {},
    borderRadius: 5
})

const styles = StyleSheet.create({
    tabsContainerStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0076FF',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    activeTabStyle: {
        backgroundColor: '#0076FF'
    },
    tabTextStyle: {
        color: '#0076FF'
    },
    activeTabTextStyle: {
        color: 'white'
    }
})

export default SegmentedControlTab