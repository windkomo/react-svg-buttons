'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MorphIcon = require('./MorphIcon');

var _MorphIcon2 = _interopRequireDefault(_MorphIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverMorphIcon = function (_Component) {
    _inherits(HoverMorphIcon, _Component);

    function HoverMorphIcon(props) {
        _classCallCheck(this, HoverMorphIcon);

        var _this = _possibleConstructorReturn(this, (HoverMorphIcon.__proto__ || Object.getPrototypeOf(HoverMorphIcon)).call(this, props));

        _this.state = { type: props.baseType };
        return _this;
    }

    _createClass(HoverMorphIcon, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                baseType = _props.baseType,
                hoverType = _props.hoverType;
            var type = this.state.type;


            return _react2.default.createElement(_MorphIcon2.default, _extends({}, this.props, {
                type: type,
                onMouseEnter: function onMouseEnter() {
                    _this2.setState({ type: hoverType });
                },
                onMouseLeave: function onMouseLeave() {
                    _this2.setState({ type: baseType });
                }
            }));
        }
    }]);

    return HoverMorphIcon;
}(_react.Component);

HoverMorphIcon.propTypes = {
    baseType: _propTypes2.default.string.isRequired,
    hoverType: _propTypes2.default.string.isRequired
};

exports.default = HoverMorphIcon;