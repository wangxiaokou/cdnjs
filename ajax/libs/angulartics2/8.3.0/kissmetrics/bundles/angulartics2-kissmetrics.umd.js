(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/kissmetrics', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.kissmetrics = {}), global.ng.core, global.angulartics2));
}(this, function (exports, core, angulartics2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var Angulartics2Kissmetrics = /** @class */ (function () {
        function Angulartics2Kissmetrics(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            if (typeof (_kmq) === 'undefined') {
                _kmq = [];
            }
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        Angulartics2Kissmetrics.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.pageTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.pageTrack(x.path); });
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        };
        Angulartics2Kissmetrics.prototype.pageTrack = function (path) {
            _kmq.push(['record', 'Pageview', { Page: path }]);
        };
        Angulartics2Kissmetrics.prototype.eventTrack = function (action, properties) {
            _kmq.push(['record', action, properties]);
        };
        Angulartics2Kissmetrics.prototype.setUsername = function (userId) {
            _kmq.push(['identify', userId]);
        };
        Angulartics2Kissmetrics.prototype.setUserProperties = function (properties) {
            _kmq.push(['set', properties]);
        };
        Angulartics2Kissmetrics.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2Kissmetrics_Factory() { return new Angulartics2Kissmetrics(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2Kissmetrics, providedIn: "root" });
        Angulartics2Kissmetrics = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2Kissmetrics);
        return Angulartics2Kissmetrics;
    }());

    exports.Angulartics2Kissmetrics = Angulartics2Kissmetrics;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-kissmetrics.umd.js.map
