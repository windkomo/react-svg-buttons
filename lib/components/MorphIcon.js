'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _pathHelper = require('../lib/pathHelper');

var _clamp = require('../lib/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _omit = require('../lib/omit');

var _omit2 = _interopRequireDefault(_omit);

var _iconTypes = require('../icon-types');

var _iconTypes2 = _interopRequireDefault(_iconTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MorphIcon = function MorphIcon(props) {
    var size = props.size,
        thickness = props.thickness,
        color = props.color,
        stiffness = props.stiffness,
        damping = props.damping,
        type = props.type;


    var origin = size / 2;
    var radius = origin - thickness;
    var circumference = 2 * radius * Math.PI;

    var pathCommonStyle = {
        fill: 'none',
        stroke: color,
        strokeWidth: thickness
    };

    var defaultStyle = _iconTypes2.default[type](origin, radius, circumference);

    var style = {};
    Object.keys(defaultStyle).forEach(function (property) {
        style[property] = (0, _reactMotion.spring)(defaultStyle[property], { stiffness: stiffness, damping: damping });
    });

    return _react2.default.createElement(
        'span',
        (0, _omit2.default)(props, ['size', 'thickness', 'color', 'stiffness', 'damping', 'type', 'baseType', 'hoverType']),
        _react2.default.createElement(
            _reactMotion.Motion,
            { defaultStyle: defaultStyle, style: style },
            function (_ref) {
                var circleDashOffset = _ref.circleDashOffset,
                    circleRotation = _ref.circleRotation,
                    circleOpacity = _ref.circleOpacity,
                    barsRotation = _ref.barsRotation,
                    bar0X1 = _ref.bar0X1,
                    bar0X2 = _ref.bar0X2,
                    bar0X3 = _ref.bar0X3,
                    bar0Y1 = _ref.bar0Y1,
                    bar0Y2 = _ref.bar0Y2,
                    bar0Y3 = _ref.bar0Y3,
                    bar0Opacity = _ref.bar0Opacity,
                    bar0Rotation = _ref.bar0Rotation,
                    bar1X1 = _ref.bar1X1,
                    bar1X2 = _ref.bar1X2,
                    bar1X3 = _ref.bar1X3,
                    bar1Y1 = _ref.bar1Y1,
                    bar1Y2 = _ref.bar1Y2,
                    bar1Y3 = _ref.bar1Y3,
                    bar1Opacity = _ref.bar1Opacity,
                    bar1Rotation = _ref.bar1Rotation,
                    bar2X1 = _ref.bar2X1,
                    bar2X2 = _ref.bar2X2,
                    bar2X3 = _ref.bar2X3,
                    bar2Y1 = _ref.bar2Y1,
                    bar2Y2 = _ref.bar2Y2,
                    bar2Y3 = _ref.bar2Y3,
                    bar2Opacity = _ref.bar2Opacity,
                    bar2Rotation = _ref.bar2Rotation,
                    sparksRotation = _ref.sparksRotation,
                    spark0X1 = _ref.spark0X1,
                    spark0X2 = _ref.spark0X2,
                    spark0Y1 = _ref.spark0Y1,
                    spark0Y2 = _ref.spark0Y2,
                    spark0Opacity = _ref.spark0Opacity,
                    spark0Rotation = _ref.spark0Rotation,
                    spark1X1 = _ref.spark1X1,
                    spark1X2 = _ref.spark1X2,
                    spark1Y1 = _ref.spark1Y1,
                    spark1Y2 = _ref.spark1Y2,
                    spark1Opacity = _ref.spark1Opacity,
                    spark1Rotation = _ref.spark1Rotation,
                    spark2X1 = _ref.spark2X1,
                    spark2X2 = _ref.spark2X2,
                    spark2Y1 = _ref.spark2Y1,
                    spark2Y2 = _ref.spark2Y2,
                    spark2Opacity = _ref.spark2Opacity,
                    spark2Rotation = _ref.spark2Rotation,
                    spark3X1 = _ref.spark3X1,
                    spark3X2 = _ref.spark3X2,
                    spark3Y1 = _ref.spark3Y1,
                    spark3Y2 = _ref.spark3Y2,
                    spark3Opacity = _ref.spark3Opacity,
                    spark3Rotation = _ref.spark3Rotation;

                return _react2.default.createElement(
                    'svg',
                    { width: size, height: size },
                    _react2.default.createElement(
                        'g',
                        {
                            transform: 'translate(' + origin + ',' + origin + ') rotate(' + (-90 + circleRotation) + ',0,0)'
                        },
                        _react2.default.createElement('circle', _extends({}, pathCommonStyle, {
                            r: radius,
                            style: {
                                opacity: circleOpacity,
                                strokeDasharray: circumference,
                                strokeDashoffset: (0, _clamp2.default)(0, circumference, circleDashOffset)
                            }
                        }))
                    ),
                    _react2.default.createElement(
                        'g',
                        {
                            transform: 'rotate(' + barsRotation + ',' + origin + ',' + origin + ')'
                        },
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + bar0Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: bar0Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: bar0X1,
                                    y: bar0Y1
                                }, {
                                    command: 'L',
                                    x: bar0X2,
                                    y: bar0Y2
                                }, {
                                    command: 'L',
                                    x: bar0X3,
                                    y: bar0Y3
                                }])
                            }))
                        ),
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + bar1Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: bar1Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: bar1X1,
                                    y: bar1Y1
                                }, {
                                    command: 'L',
                                    x: bar1X2,
                                    y: bar1Y2
                                }, {
                                    command: 'L',
                                    x: bar1X3,
                                    y: bar1Y3
                                }])
                            }))
                        ),
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + bar2Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: bar2Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: bar2X1,
                                    y: bar2Y1
                                }, {
                                    command: 'L',
                                    x: bar2X2,
                                    y: bar2Y2
                                }, {
                                    command: 'L',
                                    x: bar2X3,
                                    y: bar2Y3
                                }])
                            }))
                        )
                    ),
                    _react2.default.createElement(
                        'g',
                        {
                            transform: 'rotate(' + sparksRotation + ',' + origin + ',' + origin + ')'
                        },
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + spark0Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: spark0Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: spark0X1,
                                    y: spark0Y1
                                }, {
                                    command: 'L',
                                    x: spark0X2,
                                    y: spark0Y2
                                }])
                            }))
                        ),
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + spark1Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: spark1Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: spark1X1,
                                    y: spark1Y1
                                }, {
                                    command: 'L',
                                    x: spark1X2,
                                    y: spark1Y2
                                }])
                            }))
                        ),
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + spark2Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: spark2Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: spark2X1,
                                    y: spark2Y1
                                }, {
                                    command: 'L',
                                    x: spark2X2,
                                    y: spark2Y2
                                }])
                            }))
                        ),
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'rotate(' + spark3Rotation + ',' + origin + ',' + origin + ')'
                            },
                            _react2.default.createElement('path', _extends({}, pathCommonStyle, {
                                style: {
                                    opacity: spark3Opacity
                                },
                                d: (0, _pathHelper.pathCommands)([{
                                    command: 'M',
                                    x: spark3X1,
                                    y: spark3Y1
                                }, {
                                    command: 'L',
                                    x: spark3X2,
                                    y: spark3Y2
                                }])
                            }))
                        )
                    )
                );
            }
        )
    );
};

MorphIcon.propTypes = {
    size: _propTypes2.default.number.isRequired,
    thickness: _propTypes2.default.number.isRequired,
    color: _propTypes2.default.string.isRequired,
    stiffness: _propTypes2.default.number.isRequired,
    damping: _propTypes2.default.number.isRequired,
    type: _propTypes2.default.oneOf(Object.keys(_iconTypes2.default))
};

MorphIcon.defaultProps = {
    size: 52,
    thickness: 1,
    color: '#000',
    stiffness: 150,
    damping: 15
};

exports.default = MorphIcon;