"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = require("../Enums/PolygonMaskType");
var Particle_1 = require("./Particle");
var PolygonMaskInlineArrangement_1 = require("../Enums/PolygonMaskInlineArrangement");
var Utils_1 = require("./Utils/Utils");
var Constants_1 = require("./Utils/Constants");
var PolygonMask = (function () {
    function PolygonMask(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.paths = [];
        this.path2DSupported = window.hasOwnProperty("Path2D");
    }
    PolygonMask.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var options = container.options;
        if (!options.polygon.enable ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.none ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Constants_1.Constants.noPolygonFound);
        }
        var x = position ? position.x : Math.random() * container.canvas.dimension.width;
        var y = position ? position.y : Math.random() * container.canvas.dimension.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inside) {
            return inside;
        }
        else if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMask.prototype.redraw = function () {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = setTimeout(function () {
                _this.parseSvgPathToPolygon().then(function (data) {
                    _this.raw = data;
                    _this.createPath2D();
                    container.particles.redraw();
                });
            }, 250);
        }
    };
    PolygonMask.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var container, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        if (!(options.polygon.enable && options.polygon.url)) return [3, 2];
                        _a = this;
                        return [4, this.parseSvgPathToPolygon(options.polygon.url)];
                    case 1:
                        _a.raw = _b.sent();
                        this.createPath2D();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMask.prototype.reset = function () {
        delete this.raw;
        this.paths = [];
        delete this.svg;
    };
    PolygonMask.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var options = container.options;
        var position;
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            switch (options.polygon.inline.arrangement) {
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint:
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint:
                default:
                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.dimension.width,
                y: Math.random() * container.canvas.dimension.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMask.prototype.parseSvgPathToPolygon = function (svgUrl) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var container, options, url, req, xml, parser, doc, svgPaths, i, path, scale, position, polygonRaw, _i, _b, path, len, p, i, segment, absSeg, relSeg;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        url = svgUrl || options.polygon.url;
                        if (!(!this.paths.length || !this.svg)) return [3, 4];
                        return [4, fetch(url)];
                    case 1:
                        req = _c.sent();
                        if (!req.ok) return [3, 3];
                        return [4, req.text()];
                    case 2:
                        xml = _c.sent();
                        parser = new DOMParser();
                        doc = parser.parseFromString(xml, "image/svg+xml");
                        this.svg = doc.getElementsByTagName("svg")[0];
                        svgPaths = doc.getElementsByTagName("path");
                        for (i = 0; i < svgPaths.length; i++) {
                            path = svgPaths.item(i);
                            if (path) {
                                this.paths.push({
                                    element: path,
                                    length: path.getTotalLength()
                                });
                            }
                        }
                        return [3, 4];
                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    case 4:
                        scale = options.polygon.scale;
                        this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
                        this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
                        position = (_a = options.polygon.position) !== null && _a !== void 0 ? _a : {
                            x: 50,
                            y: 50,
                        };
                        this.offset = {
                            x: container.canvas.dimension.width * position.x / 100 - this.dimension.width / 2,
                            y: container.canvas.dimension.height * position.y / 100 - this.dimension.height / 2,
                        };
                        polygonRaw = [];
                        for (_i = 0, _b = this.paths; _i < _b.length; _i++) {
                            path = _b[_i];
                            len = path.element.pathSegList.numberOfItems;
                            p = {
                                x: 0,
                                y: 0,
                            };
                            for (i = 0; i < len; i++) {
                                segment = path.element.pathSegList.getItem(i);
                                switch (segment.pathSegType) {
                                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                        absSeg = segment;
                                        p.x = absSeg.x;
                                        p.y = absSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                        p.x = segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                        p.y = segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                        relSeg = segment;
                                        p.x += relSeg.x;
                                        p.y += relSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                        p.x += segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                        p.y += segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                        continue;
                                }
                                polygonRaw.push({
                                    x: p.x * scale + this.offset.x,
                                    y: p.y * scale + this.offset.y,
                                });
                            }
                        }
                        return [2, polygonRaw];
                }
            });
        });
    };
    PolygonMask.prototype.drawPolygon = function () {
        var container = this.container;
        container.canvas.drawPolygonMask();
    };
    PolygonMask.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                var position = {
                    x: item.x,
                    y: item.y,
                };
                container.particles.addParticle(new Particle_1.Particle(container, position));
            }
        }
    };
    PolygonMask.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var path = Utils_1.Utils.itemFromArray(this.paths);
        var distance = Math.floor(Math.random() * path.length) + 1;
        var point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    };
    PolygonMask.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b, _c, _d, _e, _f;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var offset = 0;
        var point;
        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
        var distance = totalLength / options.particles.number.value;
        for (var _i = 0, _g = this.paths; _i < _g.length; _i++) {
            var path = _g[_i];
            var pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_a = point === null || point === void 0 ? void 0 : point.x) !== null && _a !== void 0 ? _a : 0) * options.polygon.scale + ((_c = (_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0),
            y: ((_d = point === null || point === void 0 ? void 0 : point.y) !== null && _d !== void 0 ? _d : 0) * options.polygon.scale + ((_f = (_e = this.offset) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0),
        };
    };
    PolygonMask.prototype.getPointOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.createPath2D = function () {
        var _a;
        if (!this.path2DSupported) {
            return;
        }
        var _loop_1 = function (path) {
            var pathData = (_a = path.element) === null || _a === void 0 ? void 0 : _a.getAttribute("d");
            if (pathData) {
                var path2d = new Path2D(pathData);
                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                var finalPath = new Path2D();
                var transform = matrix.scale(this_1.container.options.polygon.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (!path.path2d && this_1.raw) {
                path.path2d = new Path2D();
                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
                this_1.raw.forEach(function (pos, i) {
                    var _a;
                    if (i > 0) {
                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                    }
                });
                path.path2d.closePath();
            }
        };
        var this_1 = this;
        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
            var path = _b[_i];
            _loop_1(path);
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;
