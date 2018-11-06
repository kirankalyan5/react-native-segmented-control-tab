import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export interface SegmentedControlTabProperties extends React.Props<ReactNativeSegmentedControlTab> {
    // Default ['One', 'Two', 'Three'] ; titles of tabs Default 
    values?: Array<any>
    // Default [0] ;index of tab item to be selected initially 
    selectedIndex?: number
    // Default  [0];Array of indices of tab items to be selected initially - when multiple prop is true else it will take selectedIndex
    selectedIndices?: Array<number>
    // Default  true; Boolean to enable or disable the component
    enable?: boolean
    // Default  false; Boolean which enables the multiple selection option
    multiple?: boolean
    // Default  5;borderRadius of whole tab
    borderRadius?: number
    // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the segmentedControl wrapper
    tabsContainerStyle?: StyleProp<ViewStyle>
    // Default  default style opacity: 0.6;Custom style that can be passed when enable is set to false
    tabsContainerDisableStyle?: StyleProp<ViewStyle>
    // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the tabs
    tabStyle?: StyleProp<ViewStyle>
    // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the tab title
    tabTextStyle?: StyleProp<TextStyle>
    // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the active tab
    activeTabStyle?: StyleProp<TextStyle>
    // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the active tab text
    activeTabTextStyle?: StyleProp<TextStyle>
    // Default  [1, 2, 3];badges values to display
    badges?: Array<any>
    // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the badge container
    tabBadgeContainerStyle?: StyleProp<TextStyle>
    // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the active badge container
    activeTabBadgeContainerStyle?: StyleProp<TextStyle>
    // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the badge text
    tabBadgeStyle?: StyleProp<TextStyle>
    // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the active badge text
    activeTabBadgeStyle?: StyleProp<TextStyle>
    // Default  call-back function when a tab is selected
    onTabPress?: (index: number) => void
    // Default  true;whether the segment & badge text should allow font scaling (default matches React Native default)
    allowFontScaling?: boolean
    // Default  true;enables accessibility for each tab
    accessible?: boolean
    // Default  ['Label 1', 'Label 2', 'Label 3'];Reads out the given text on each tab press when voice over is enabled. If not set, uses the text passed in as values in props as a fallback
    accessibilityLabels?: Array<string>
    // Default  1;Opacity value to customize tab press
    activeTabOpacity?: number

}
export default class ReactNativeSegmentedControlTab extends React.Component<SegmentedControlTabProperties>{
}
