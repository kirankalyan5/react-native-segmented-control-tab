import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
   StyleSheet,
   Text,
   ViewPropTypes
  } from 'react-native';

const styles = StyleSheet.create({
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
    backgroundColor: '#0076FF',
  },
  tabTextStyle: {
    color: '#0076FF',
  },
  activeTabTextStyle: {
    color: 'white',
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: 'white',
  },
  tabBadgeStyle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  activeTabBadgeStyle: {
    color: 'black',
  },
});

export default class TabOption extends PureComponent {
  static propTypes = {
    isTabActive: PropTypes.bool,
    index: PropTypes.number,
    badge: PropTypes.any,
    text: PropTypes.string.isRequired,
    firstTabStyle: ViewPropTypes.style,
    lastTabStyle: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    activeTabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    tabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    onTabPress: PropTypes.func,
    textNumberOfLines: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    accessible: PropTypes.any,
    activeTabOpacity: PropTypes.number,
    accessibilityLabel: PropTypes.string,
    enabled: PropTypes.bool,
  };

  static defaultProps = {
    isTabActive: false,
    index: 0,
    badge: '',
    firstTabStyle: {},
    lastTabStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    onTabPress() {},
    textNumberOfLines: 1,
    allowFontScaling: false,
    accessible: {},
    activeTabOpacity: 1,
    accessibilityLabel: '',
    enabled: false,
  };

  render() {
    const {
      isTabActive,
      index,
      badge,
      text,
      firstTabStyle,
      lastTabStyle,
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
      activeTabOpacity,
      accessibilityLabel,
      enabled,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.tabStyle,
          tabStyle,
          isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
          firstTabStyle,
          lastTabStyle,
        ]}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={isTabActive ? 'selected' : 'button'}
        accessibilityComponentType="button"
        onPress={() => onTabPress(index)}
        disabled={!enabled}
        activeOpacity={activeTabOpacity}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.tabTextStyle,
              tabTextStyle,
              isTabActive
                ? [styles.activeTabTextStyle, activeTabTextStyle]
                : {},
            ]}
            numberOfLines={textNumberOfLines}
            allowFontScaling={allowFontScaling}
            ellipsizeMode="tail">
            {text}
          </Text>
          {Boolean(badge) && (
            <View
              style={[
                styles.tabBadgeContainerStyle,
                tabBadgeContainerStyle,
                isTabActive
                  ? [
                      styles.activeTabBadgeContainerStyle,
                      activeTabBadgeContainerStyle,
                    ]
                  : {},
              ]}>
              <Text
                style={[
                  styles.tabBadgeStyle,
                  tabBadgeStyle,
                  isTabActive
                    ? [styles.activeTabBadgeStyle, activeTabBadgeStyle]
                    : {},
                ]}
                allowFontScaling={allowFontScaling}>
                {badge}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
