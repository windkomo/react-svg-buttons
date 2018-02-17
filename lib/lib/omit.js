"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = omit;
function omit(object, properties) {
    var filteredObject = {};
    Object.keys(object).filter(function (p) {
        return !properties.includes(p);
    }).forEach(function (p) {
        filteredObject[p] = object[p];
    });

    return filteredObject;
}