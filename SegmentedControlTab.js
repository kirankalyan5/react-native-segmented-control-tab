import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, StyleSheet, Text} from 'react-native';
import TabOption from './TabOption';

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
});
const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
  if (multiple) {
    onTabPress(index);
  } else if (selectedIndex !== index) {
    onTabPress(index);
  }
};

const getAccessibilityLabelByIndex = (accessibilityLabels, index) =>
  accessibilityLabels &&
  accessibilityLabels.length > 0 &&
  accessibilityLabels[index]
    ? accessibilityLabels[index]
    : undefined;

export default class SegmentedControlTab extends PureComponent {
  static propTypes = {
    values: PropTypes.array,
    badges: PropTypes.array,
    multiple: PropTypes.bool,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    tabsContainerStyle: ViewPropTypes.style,
    tabsContainerDisableStyle: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    activeTabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    tabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    borderRadius: PropTypes.number,
    textNumberOfLines: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    accessible: PropTypes.bool,
    accessibilityLabels: PropTypes.array,
    activeTabOpacity: PropTypes.number,
    enabled: PropTypes.bool,
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
    tabsContainerDisableStyle: {opacity: 0.6},
    tabStyle: {},
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
    } = this.props;
    const firstTabStyle = [
      {
        borderRightWidth: values.length === 2 ? 1 : 0,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      },
    ];
    const lastTabStyle = [
      {
        borderLeftWidth: 0,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      },
    ];

    const tabsContainerStyles = [styles.tabsContainerStyle, tabsContainerStyle];
    if (!enabled) {
      tabsContainerStyles.push(tabsContainerDisableStyle);
    }
    return (
      <View style={tabsContainerStyles} removeClippedSubviews={false}>
        {values.map((item, index) => {
          const accessibilityText = getAccessibilityLabelByIndex(
            accessibilityLabels,
            index,
          );
          return (
            <TabOption
              key={`${index}${item}`}
              index={index}
              badge={badges && badges[index] ? badges[index] : false}
              isTabActive={
                multiple
                  ? selectedIndices.includes(index)
                  : selectedIndex === index
              }
              text={item}
              textNumberOfLines={textNumberOfLines}
              onTabPress={indexs =>
                handleTabPress(indexs, multiple, selectedIndex, onTabPress)
              }
              firstTabStyle={
                index === 0 ? [{borderRightWidth: 0}, firstTabStyle] : {}
              }
              lastTabStyle={
                index === values.length - 1
                  ? [{borderLeftWidth: 0}, lastTabStyle]
                  : {}
              }
              tabStyle={[
                tabStyle,
                index !== 0 && index !== values.length - 1
                  ? {marginLeft: -1}
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
          );
        })}
      </View>
    );
  }
}
