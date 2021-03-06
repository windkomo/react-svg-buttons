"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (origin, radius) {
    return {
        circleDashOffset: 0,
        circleRotation: 0,
        circleOpacity: 1,

        barsRotation: 0,

        bar0X1: origin - radius * 0.6,
        bar0X2: origin,
        bar0X3: origin + radius * 0.65,
        bar0Y1: origin - radius * 0.2,
        bar0Y2: origin - radius * 0.2,
        bar0Y3: origin - radius * 0.2,
        bar0Opacity: 1,
        bar0Rotation: 0,

        bar1X1: origin - radius * 0.6,
        bar1X2: origin,
        bar1X3: origin + radius * 0.6,
        bar1Y1: origin + radius * 0.1,
        bar1Y2: origin + radius * 0.2,
        bar1Y3: origin + radius * 0.3,
        bar1Opacity: 1,
        bar1Rotation: 90,

        bar2X1: origin - radius * 0.65,
        bar2X2: origin,
        bar2X3: origin + radius * 0.6,
        bar2Y1: origin + radius * 0.2,
        bar2Y2: origin + radius * 0.2,
        bar2Y3: origin + radius * 0.2,
        bar2Opacity: 1,
        bar2Rotation: 0,

        sparksRotation: 0,

        spark0X1: origin + radius * 0.3,
        spark0X2: origin + radius * 0.1,
        spark0Y1: origin - radius * 0.6,
        spark0Y2: origin + radius * 0.6,
        spark0Opacity: 1,
        spark0Rotation: 0,

        spark1X1: origin,
        spark1X2: origin,
        spark1Y1: origin,
        spark1Y2: origin,
        spark1Opacity: 0,
        spark1Rotation: 0,

        spark2X1: origin,
        spark2X2: origin,
        spark2Y1: origin,
        spark2Y2: origin,
        spark2Opacity: 0,
        spark2Rotation: 0,

        spark3X1: origin,
        spark3X2: origin,
        spark3Y1: origin,
        spark3Y2: origin,
        spark3Opacity: 0,
        spark3Rotation: 0
    };
};