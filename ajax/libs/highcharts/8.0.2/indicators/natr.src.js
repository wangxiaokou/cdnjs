/**
 * @license Highstock JS v8.0.2 (2020-03-03)
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2019 Paweł Dalek
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/indicators/natr', ['highcharts', 'highcharts/modules/stock'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);
        }
    }
    _registerModule(_modules, 'indicators/natr.src.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var seriesType = U.seriesType;
        var ATR = H.seriesTypes.atr;
        /**
         * The NATR series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.natr
         *
         * @augments Highcharts.Series
         */
        seriesType('natr', 'sma', 
        /**
         * Normalized average true range indicator (NATR). This series requires
         * `linkedTo` option to be set and should be loaded after the
         * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
         *
         * @sample {highstock} stock/indicators/natr
         *         NATR indicator
         *
         * @extends      plotOptions.atr
         * @since        7.0.0
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @requires     stock/indicators/natr
         * @optionparent plotOptions.natr
         */
        {
            tooltip: {
                valueSuffix: '%'
            }
        }, 
        /**
         * @lends Highcharts.Series#
         */
        {
            requiredIndicators: ['atr'],
            getValues: function (series, params) {
                var atrData = (ATR.prototype.getValues.apply(this,
                    arguments)),
                    atrLength = atrData.values.length,
                    period = params.period - 1,
                    yVal = series.yData,
                    i = 0;
                if (!atrData) {
                    return;
                }
                for (; i < atrLength; i++) {
                    atrData.yData[i] = (atrData.values[i][1] / yVal[period][3] * 100);
                    atrData.values[i][1] = atrData.yData[i];
                    period++;
                }
                return atrData;
            }
        });
        /**
         * A `NATR` series. If the [type](#series.natr.type) option is not specified, it
         * is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.natr
         * @since     7.0.0
         * @product   highstock
         * @excluding dataParser, dataURL
         * @requires  stock/indicators/indicators
         * @requires  stock/indicators/natr
         * @apioption series.natr
         */
        ''; // to include the above in the js output'

    });
    _registerModule(_modules, 'masters/indicators/natr.src.js', [], function () {


    });
}));