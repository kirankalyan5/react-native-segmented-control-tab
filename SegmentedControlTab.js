import React, { Component, PropTypes } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

class SegmentedControlTab extends Component {

    renderTabOption(tab, index) {
      const { onPress, activeColor, inActiveColor, textActiveColor, textInActiveColor, borderRadius, selectedIndex, values} = this.props
      const isTabActive = selectedIndex === index
      const textColor = isTabActive ? textActiveColor : textInActiveColor
      const firstTabStyle = [{ borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius, borderWidth: 1 }]
      const lastTabStyle = [{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius, borderWidth: 1,borderLeftWidth: 0 }]
      const otherTabStyle = [{ borderWidth: 1, borderLeftWidth: 0 }]

      const tabStyle = index === 0 ? firstTabStyle : (index < values.length - 1 ? otherTabStyle : lastTabStyle )

      return (
          <TouchableOpacity key={index}
              onPress={() => onPress(index) }
              activeOpacity={1}
              style={[ ...tabStyle, styles.tab, { backgroundColor: (isTabActive ? activeColor : inActiveColor), borderColor: activeColor }, this.props.tabStyle]}>
              <Text style={[{ color: textColor }, this.props.tabTitleStyle]}>{tab}</Text>
          </TouchableOpacity>)
    }

    render() {
      const {values} = this.props

      return (
          <View style={[styles.tabsContainer, this.props.tabsContainerStyle]}>
            {values.map((item, index) => this.renderTabOption(item, index)) }
          </View>
      )
    }
  }
 SegmentedControlTab.propTypes = Object.assign({}, Component.propTypes, {
    values: PropTypes.array,
    onPress: PropTypes.func,
    activeColor: PropTypes.string,
    inActiveColor: PropTypes.string,
    textActiveColor: PropTypes.string,
    textInActiveColor: PropTypes.string,
    borderRadius: PropTypes.number,
    selectedIndex: PropTypes.number
      })

  SegmentedControlTab.defaultProps = Object.assign({}, Component.propTypes, {
    values: ['One', 'Two', 'Three'],
    selectedIndex: 0,
    activeColor: '#0076FF',
    inActiveColor: 'white',
    textActiveColor: 'white',
    textInActiveColor: '#0076FF',
    borderRadius: 5,
    onPress() { }
  })

  const styles = StyleSheet.create({
    tabsContainer: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      borderRadius: 5
    },
    tab: {
      paddingVertical: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default SegmentedControlTab