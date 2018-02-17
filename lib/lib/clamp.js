"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
function clamp(min, max, value) {
  return Math.min(Math.max(value, min), max);
}