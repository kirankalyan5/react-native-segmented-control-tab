import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
    if (multiple) {
        onTabPress(index);
    }
    else if (selectedIndex !== index) {
        onTabPress(index);
    }
};


const TabOption = ({
    isTabActive, index, text,
    firstTabStyle, lastTabStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    onTabPress,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            onPress={() => onTabPress(index)}
            activeOpacity={1}>
            <Text style={[
                styles.textStyle,
                tabTextStyle,
                isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const SegmentedControlTab = ({
    multiple, selectedIndex, selectedIndices, values,
    borderRadius, tabsContainerStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    onTabPress,
}) => {
    const firstTabStyle = [{ borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }];
    const lastTabStyle = [{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }];

    return (
        <View
            style={[styles.tabsContainerStyle, tabsContainerStyle]}
            removeClippedSubviews={false}>
            {
                values.map((item, index) => {
                    return (
                        <TabOption
                            key={index}
                            index={index}
                            isTabActive={multiple ? selectedIndices.includes(index) : selectedIndex === index}
                            text={item}
                            onTabPress={(index) => handleTabPress(index, multiple, selectedIndex, onTabPress)}
                            firstTabStyle={index === 0 ? firstTabStyle : {}}
                            lastTabStyle={index === values.length - 1 ? lastTabStyle : {}}
                            tabStyle={[tabStyle, index !== 0 && index !== values.length - 1 ? { marginHorizontal: -1 } : {}]}
                            activeTabStyle={activeTabStyle}
                            tabTextStyle={tabTextStyle}
                            activeTabTextStyle={activeTabTextStyle} />
                    );
                })
            }
        </View>
    );
};

SegmentedControlTab.propTypes = Object.assign({}, Component.propTypes, {
    values: PropTypes.array,
    multiple: PropTypes.bool,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    tabsContainerStyle: View.propTypes.style,
    tabStyle: View.propTypes.style,
    activeTabStyle: View.propTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    borderRadius: PropTypes.number
})

SegmentedControlTab.defaultProps = Object.assign({}, Component.propTypes, {
    values: ['One', 'Two', 'Three'],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
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
