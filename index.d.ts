
    export interface SegmentedControlTtabProperties extends React.Props<ReactNativeSegmentedControlTab> {
        // Default ['One', 'Two', 'Three'] ; titles of tabs Default 
        values?: Array<string>
        // Default [0] ;index of tab item to be selected initially 
        selectedIndex?: Array<number>
        // Default  [0];Array of indices of tab items to be selected initially - when multiple prop is true else it will take selectedIndex
        selectedIndices?: Array<number>
        // Default  true; Boolean to enable or disable the component
        enable?: boolean
        // Default  false; Boolean which enables the multiple selection option
        multiple?: boolean
        // Default  5;borderRadius of whole tab
        borderRadius?: number
        // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the segmentedControl wrapper
        tabsContainerStyle?: any
        // Default  default style opacity: 0.6;Custom style that can be passed when enable is set to false
        tabsContainerDisableStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the tabs
        tabStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the tab title
        tabTextStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the active tab
        activeTabStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external styles can be passed to override the default styles of the active tab text
        activeTabTextStyle?: any
        // Default  [1, 2, 3];badges values to display
        badges?: Array<number>
        // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the badge container
        tabBadgeContainerStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the active badge container
        activeTabBadgeContainerStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the badge text
        tabBadgeStyle?: any
        // Default  base styles added in SegmentedControlTab.js;external style can be passed to override the default style of the active badge text
        activeTabBadgeStyle?: any
        // Default  call-back function when a tab is selected
        onTabPress?: (index: any) => void
        // Default  true;whether the segment & badge text should allow font scaling (default matches React Native default)
        allowFontScaling?: boolean
        // Default  true;enables accessibility for each tab
        accessible?: boolean
        // Default  ['Label 1', 'Label 2', 'Label 3'];Reads out the given text on each tab press when voice over is enabled. If not set, uses the text passed in as values in props as a fallback
        accessibilityLabels?: Array<string>
        // Default  1;Opacity value to customize tab press
        activeTabOpacity?: number

    }
    export default class ReactNativeSegmentedControlTab extends React.Component<SegmentedControlTtabProperties>{
    }
