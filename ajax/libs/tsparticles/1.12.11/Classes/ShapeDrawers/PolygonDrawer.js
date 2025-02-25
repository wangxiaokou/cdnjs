"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase_1 = require("./PolygonDrawerBase");
var PolygonDrawer = (function (_super) {
    __extends(PolygonDrawer, _super);
    function PolygonDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var side = {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: radius * 2.66 / (sides / 3),
        };
        return side;
    };
    PolygonDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var start = {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
        return start;
    };
    return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.PolygonDrawer = PolygonDrawer;
