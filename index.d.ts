declare module 'react-native-segmented-control-tab' {
  import React, { SFC } from 'react'
  import { StyleProp, TextStyle, ViewStyle } from 'react-native'

  interface SegmentedControlTabProps {
    activeTabBadgeContainerStyle: StyleProp<TextStyle>
    activeTabBadgeStyle: StyleProp<TextStyle>
    activeTabStyle: StyleProp<ViewStyle>
    activeTabTextStyle: StyleProp<TextStyle>
    allowFontScaling: boolean
    badges: string[]
    borderRadius: number
    multiple: boolean
    onTabPress: (index: number) => void
    selectedIndex: number
    selectedIndices: number[]
    tabBadgeContainerStyle: StyleProp<TextStyle>
    tabBadgeStyle: StyleProp<TextStyle>
    tabStyle: StyleProp<ViewStyle>
    tabTextStyle: StyleProp<TextStyle>
    tabsContainerStyle: StyleProp<ViewStyle>
    textNumberOfLines: number
    values: string[]
  }

  const SegmentedControlTab: SFC<SegmentedControlTabProps>

  export default SegmentedControlTab
}
