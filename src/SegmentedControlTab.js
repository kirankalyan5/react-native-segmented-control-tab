/* @flow */
import React, { PureComponent } from 'react'
import {
  View, StyleSheet,
} from 'react-native'

import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

import TabOption from './TabOption'

type Props = {
  tabStyle: ViewStyleProp,
  firstTabStyle: ViewStyleProp,
  lastTabStyle: ViewStyleProp,
  activeTabStyle: ViewStyleProp,
  tabTextStyle: TextStyleProp,
  activeTabTextStyle: TextStyleProp,
  tabBadgeContainerStyle: TextStyleProp,
  activeTabBadgeContainerStyle: TextStyleProp,
  tabBadgeStyle: TextStyleProp,
  activeTabBadgeStyle: TextStyleProp,
  onTabPress: Function,
  textNumberOfLines: number,
  allowFontScaling: boolean,
  accessible: boolean,
  activeTabOpacity: number,
  enabled: boolean,
  values: string[],
  badges: string[],
  multiple: boolean,
  selectedIndex: number,
  selectedIndices: number[],
  tabsContainerStyle: ViewStyleProp,
  tabsContainerDisableStyle: ViewStyleProp,
  borderRadius: number,
  accessibilityLabels: string[],
}

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
})
const handleTabPress = (
  index: number,
  multiple: boolean,
  selectedIndex: number,
  onTabPress: Function,
) => {
  if (multiple) {
    onTabPress(index)
  } else if (selectedIndex !== index) {
    onTabPress(index)
  }
}

const getAccessibilityLabelByIndex = (
  accessibilityLabels: string[],
  index: number,
) => (accessibilityLabels
  && accessibilityLabels.length > 0
  && accessibilityLabels[index]
  ? accessibilityLabels[index]
  : undefined)

export default class SegmentedControlTab extends PureComponent<Props> {
  static defaultProps = {

  };

  static defaultProps = {
    values: ['One', 'Two', 'Three'],
    accessible: true,
    accessibilityLabels: [],
    badges: ['', '', ''],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress: () => {},
    tabsContainerStyle: {},
    tabsContainerDisableStyle: { opacity: 0.6 },
    tabStyle: {},
    firstTabStyle: {},
    lastTabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    borderRadius: 5,
    textNumberOfLines: 1,
    allowFontScaling: true,
    activeTabOpacity: 1,
    enabled: true,
  };


  render() {
    const {
      multiple,
      selectedIndex,
      selectedIndices,
      values,
      badges,
      borderRadius,
      tabsContainerStyle,
      tabsContainerDisableStyle,
      tabStyle,
      firstTabStyle,
      lastTabStyle,
      activeTabStyle,
      tabTextStyle,
      activeTabTextStyle,
      tabBadgeContainerStyle,
      activeTabBadgeContainerStyle,
      tabBadgeStyle,
      activeTabBadgeStyle,
      onTabPress,
      textNumberOfLines,
      allowFontScaling,
      accessible,
      accessibilityLabels,
      activeTabOpacity,
      enabled,
    } = this.props
    const firstTabStyleDefault = [
      {
        borderRightWidth: values && values.length === 2 ? 1 : 0,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      },
    ]
    const lastTabStyleDefault = [
      {
        borderLeftWidth: 0,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      },
    ]

    const tabsContainerStyles = [styles.tabsContainerStyle, tabsContainerStyle]
    if (!enabled) {
      tabsContainerStyles.push(tabsContainerDisableStyle)
    }
    return (
      <View style={tabsContainerStyles} removeClippedSubviews={false}>
        {values && values.map((item, index) => {
          const accessibilityText = getAccessibilityLabelByIndex(
            accessibilityLabels,
            index,
          )
          return (
            <TabOption
              key={item}
              index={index}
              badge={badges && badges[index] ? badges[index] : false}
              isTabActive={
                multiple
                  ? selectedIndices.includes(index)
                  : selectedIndex === index
              }
              text={item}
              textNumberOfLines={textNumberOfLines}
              onTabPress={indexs => handleTabPress(indexs, multiple, selectedIndex, onTabPress)
              }
              firstTabStyle={
                index === 0 ? [{ borderRightWidth: 0 }, firstTabStyleDefault, firstTabStyle] : {}
              }
              lastTabStyle={
                index === values.length - 1
                  ? [{ borderLeftWidth: 0 }, lastTabStyleDefault, lastTabStyle]
                  : {}
              }
              tabStyle={[
                tabStyle,
                index !== 0 && index !== values.length - 1
                  ? { marginLeft: -1 }
                  : {},
              ]}
              activeTabStyle={activeTabStyle}
              tabTextStyle={tabTextStyle}
              activeTabTextStyle={activeTabTextStyle}
              tabBadgeContainerStyle={tabBadgeContainerStyle}
              activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
              tabBadgeStyle={tabBadgeStyle}
              activeTabBadgeStyle={activeTabBadgeStyle}
              allowFontScaling={allowFontScaling}
              activeTabOpacity={activeTabOpacity}
              accessible={accessible}
              accessibilityLabel={accessibilityText || item}
              enabled={enabled}
            />
          )
        })}
      </View>
    )
  }
}
