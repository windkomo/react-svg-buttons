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

var _MorphIcon = require('../MorphIcon');

var _MorphIcon2 = _interopRequireDefault(_MorphIcon);

var _omit = require('../../lib/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavButton = function (_Component) {
    _inherits(NavButton, _Component);

    function NavButton(props) {
        _classCallCheck(this, NavButton);

        var _this = _possibleConstructorReturn(this, (NavButton.__proto__ || Object.getPrototypeOf(NavButton)).call(this, props));

        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);

        _this.state = { hover: false };
        return _this;
    }

    _createClass(NavButton, [{
        key: 'handleMouseEnter',
        value: function handleMouseEnter() {
            this.setState({ hover: true });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            this.setState({ hover: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                opened = _props.opened;
            var hover = this.state.hover;


            var type = void 0;
            if (hover) {
                switch (direction) {
                    case 'up':
                        type = opened ? 'arrowDown' : 'arrowUp';
                        break;

                    case 'right':
                        type = opened ? 'arrowLeft' : 'arrowRight';
                        break;

                    case 'down':
                        type = opened ? 'arrowUp' : 'arrowDown';
                        break;

                    case 'left':
                        type = opened ? 'arrowRight' : 'arrowLeft';
                        break;
                }
            } else {
                type = opened ? 'cross' : 'bars';
            }

            return _react2.default.createElement(_MorphIcon2.default, _extends({}, (0, _omit2.default)(this.props, ['direction', 'opened']), {
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                type: type
            }));
        }
    }]);

    return NavButton;
}(_react.Component);

NavButton.propTypes = {
    direction: _propTypes2.default.oneOf(['up', 'right', 'down', 'left']),
    opened: _propTypes2.default.bool.isRequired
};

NavButton.defaultProps = {
    direction: 'down',
    opened: false
};

exports.default = NavButton;