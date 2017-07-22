'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleTabPress = function handleTabPress(index, multiple, selectedIndex, onTabPress) {
    if (multiple) {
        onTabPress(index);
    } else if (selectedIndex !== index) {
        onTabPress(index);
    }
};

var TabOption = function TabOption(_ref) {
    var isTabActive = _ref.isTabActive,
        index = _ref.index,
        text = _ref.text,
        firstTabStyle = _ref.firstTabStyle,
        lastTabStyle = _ref.lastTabStyle,
        tabStyle = _ref.tabStyle,
        activeTabStyle = _ref.activeTabStyle,
        tabTextStyle = _ref.tabTextStyle,
        activeTabTextStyle = _ref.activeTabTextStyle,
        onTabPress = _ref.onTabPress;

    return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { style: [styles.tabStyle, tabStyle, isTabActive ? [styles.activeTabStyle, activeTabStyle] : {}, firstTabStyle, lastTabStyle],
            onPress: function onPress() {
                return onTabPress(index);
            },
            activeOpacity: 1 },
        _react2.default.createElement(
            _reactNative.Text,
            { style: [styles.textStyle, tabTextStyle, isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}] },
            text
        )
    );
};

var SegmentedControlTab = function SegmentedControlTab(_ref2) {
    var multiple = _ref2.multiple,
        selectedIndex = _ref2.selectedIndex,
        selectedIndices = _ref2.selectedIndices,
        values = _ref2.values,
        borderRadius = _ref2.borderRadius,
        tabsContainerStyle = _ref2.tabsContainerStyle,
        tabStyle = _ref2.tabStyle,
        activeTabStyle = _ref2.activeTabStyle,
        tabTextStyle = _ref2.tabTextStyle,
        activeTabTextStyle = _ref2.activeTabTextStyle,
        _onTabPress = _ref2.onTabPress;

    var firstTabStyle = [{ borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }];
    var lastTabStyle = [{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }];

    return _react2.default.createElement(
        _reactNative.View,
        {
            style: [styles.tabsContainerStyle, tabsContainerStyle],
            removeClippedSubviews: true },
        values.map(function (item, index) {
            return _react2.default.createElement(TabOption, {
                key: index,
                index: index,
                isTabActive: multiple ? selectedIndices.includes(index) : selectedIndex === index,
                text: item,
                onTabPress: function onTabPress(index) {
                    return handleTabPress(index, multiple, selectedIndex, _onTabPress);
                },
                firstTabStyle: index === 0 ? firstTabStyle : {},
                lastTabStyle: index === values.length - 1 ? lastTabStyle : {},
                tabStyle: [tabStyle, index !== 0 && index !== values.length - 1 ? { marginHorizontal: -1 } : {}],
                activeTabStyle: activeTabStyle,
                tabTextStyle: tabTextStyle,
                activeTabTextStyle: activeTabTextStyle });
        })
    );
};

SegmentedControlTab.propTypes = Object.assign({}, _react.Component.propTypes, {
    values: _react.PropTypes.array,
    multiple: _react.PropTypes.bool,
    onTabPress: _react.PropTypes.func,
    selectedIndex: _react.PropTypes.number,
    selectedIndices: _react.PropTypes.arrayOf(_react.PropTypes.number),
    tabsContainerStyle: _reactNative.ViewPropTypes.style,
    tabStyle: _reactNative.ViewPropTypes.style,
    activeTabStyle: _reactNative.ViewPropTypes.style,
    tabTextStyle: _reactNative.ViewPropTypes.style,
    activeTabTextStyle: _reactNative.ViewPropTypes.style,
    borderRadius: _react.PropTypes.number
});

SegmentedControlTab.defaultProps = Object.assign({}, _react.Component.propTypes, {
    values: ['One', 'Two', 'Three'],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress: function onTabPress() {},

    tabsContainerStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    textStyle: {},
    activeTextStyle: {},
    borderRadius: 5
});

var styles = _reactNative.StyleSheet.create({
    tabsContainerStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0076FF',
        borderWidth: 1,
        backgroundColor: 'white'
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
});

exports.default = SegmentedControlTab;
