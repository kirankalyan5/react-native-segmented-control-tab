import React, { Component } from 'react';
import {
    View,
    ViewPropTypes,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
    if (multiple) {
        onTabPress(index);
    }
    else if (selectedIndex !== index) {
        onTabPress(index);
    }
};

const TabOption = ({
    isTabActive, index, badge, text,
    firstTabStyle, lastTabStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
    accessible,
    activeTabOpacity,
    accessibilityLabel,
    enabled,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            accessible={accessible}
            accessibilityLabel={accessibilityLabel}
            accessibilityTraits={isTabActive ? "selected" : "button"}
            accessibilityComponentType={"button"}
            onPress={() => onTabPress(index)}
            disabled={!enabled}
            activeOpacity={activeTabOpacity}>
            <View style={{ flexDirection: "row" }}>
                <Text style={[
                    styles.tabTextStyle,
                    tabTextStyle,
                    isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}
                    numberOfLines={textNumberOfLines}
                    allowFontScaling={allowFontScaling}
                    ellipsizeMode="tail">
                    {text}
                </Text>
                {
                    Boolean(badge) ?
                        <View style={[
                            styles.tabBadgeContainerStyle,
                            tabBadgeContainerStyle,
                            isTabActive ? [styles.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] : {}]}>
                            <Text style={[
                                styles.tabBadgeStyle,
                                tabBadgeStyle,
                                isTabActive ? [styles.activeTabBadgeStyle, activeTabBadgeStyle] : {}]}
                                allowFontScaling={allowFontScaling}>
                                {badge}
                            </Text>
                        </View> : false
                }
            </View>
        </TouchableOpacity>
    );
}

const getAccessibilityLabelByIndex = (accessibilityLabels, index) => {
    return accessibilityLabels && accessibilityLabels.length > 0 && accessibilityLabels[index] ?  accessibilityLabels[index] : undefined
}

const SegmentedControlTab = ({
    multiple, selectedIndex, selectedIndices, values,
    badges, borderRadius, tabsContainerStyle, tabsContainerDisableStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
    accessible,
    accessibilityLabels,
    activeTabOpacity,
    enabled
}) => {

    const firstTabStyle = [{ borderRightWidth: values.length == 2 ? 1 : 0, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
    const lastTabStyle = [{ borderLeftWidth: 0, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }]

    const tabsContainerStyles = [styles.tabsContainerStyle, tabsContainerStyle]
    if(!enabled) {
        tabsContainerStyles.push(tabsContainerDisableStyle)
    }

    return (
        <View
            style={tabsContainerStyles}
            removeClippedSubviews={false}>
            {
                values.map((item, index) => {
                    const accessibilityText = getAccessibilityLabelByIndex(accessibilityLabels, index)
                    return (
                        <TabOption
                            key={index}
                            index={index}
                            badge={badges && badges[index] ? badges[index] : false}
                            isTabActive={multiple ? selectedIndices.includes(index) : selectedIndex === index}
                            text={item}
                            textNumberOfLines={textNumberOfLines}
                            onTabPress={(index) => handleTabPress(index, multiple, selectedIndex, onTabPress)}
                            firstTabStyle={index === 0 ? [{ borderRightWidth: 0 }, firstTabStyle] : {}}
                            lastTabStyle={index === values.length - 1 ? [{ borderLeftWidth: 0 }, lastTabStyle] : {}}
                            tabStyle={[tabStyle, index !== 0 && index !== values.length - 1 ? { marginLeft: -1 } : {}]}
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
                            accessibilityLabel={accessibilityText ? accessibilityText : item }
                            enabled={enabled}
                        />
                    );
                })
            }
        </View>
    );
};

SegmentedControlTab.propTypes = {
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
    enabled: PropTypes.bool
};

SegmentedControlTab.defaultProps = {
    values: ['One', 'Two', 'Three'],
    accessible: true,
    accessibilityLabels: [],
    badges: ['', '', ''],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress: () => { },
    tabsContainerStyle: {},
    tabsContainerDisableStyle: { opacity:0.6 },
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
    },
    tabBadgeContainerStyle: {
        borderRadius: 20,
        backgroundColor: 'red',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginBottom: 3
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: 'white'
    },
    tabBadgeStyle: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold'
    },
    activeTabBadgeStyle: {
        color: 'black'
    }
});

export default SegmentedControlTab
