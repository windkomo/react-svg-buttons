"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (origin, radius) {
    return {
        circleDashOffset: 0,
        circleRotation: 0,
        circleOpacity: 1,

        barsRotation: 90,

        bar0X1: origin - radius * 0.2,
        bar0X2: origin,
        bar0X3: origin + radius * 0.4,
        bar0Y1: origin - radius * 0.4,
        bar0Y2: origin - radius * 0.4,
        bar0Y3: origin - radius * 0.4,
        bar0Opacity: 1,
        bar0Rotation: 0,

        bar1X1: origin - radius * 0.4,
        bar1X2: origin,
        bar1X3: origin + radius * 0.4,
        bar1Y1: origin - radius * 0.2,
        bar1Y2: origin - radius * 0.5,
        bar1Y3: origin - radius * 0.2,
        bar1Opacity: 1,
        bar1Rotation: -90,

        bar2X1: origin - radius * 0.2,
        bar2X2: origin,
        bar2X3: origin + radius * 0.4,
        bar2Y1: origin + radius * 0.4,
        bar2Y2: origin + radius * 0.4,
        bar2Y3: origin + radius * 0.4,
        bar2Opacity: 1,
        bar2Rotation: 0,

        sparksRotation: 0,

        spark0X1: origin,
        spark0X2: origin,
        spark0Y1: origin - radius * 0.15,
        spark0Y2: origin + radius * 0.15,
        spark0Opacity: 1,
        spark0Rotation: 90,

        spark1X1: origin + radius * 0.15,
        spark1X2: origin + radius * 0.15,
        spark1Y1: origin,
        spark1Y2: origin + radius * 0.4,
        spark1Opacity: 1,
        spark1Rotation: 0,

        spark2X1: origin,
        spark2X2: origin,
        spark2Y1: origin + radius,
        spark2Y2: origin + radius,
        spark2Opacity: 1,
        spark2Rotation: 0,

        spark3X1: origin - radius * 0.15,
        spark3X2: origin - radius * 0.15,
        spark3Y1: origin,
        spark3Y2: origin + radius * 0.4,
        spark3Opacity: 1,
        spark3Rotation: 0
    };
};