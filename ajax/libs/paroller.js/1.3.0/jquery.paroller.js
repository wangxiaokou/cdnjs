/**
 * jQuery plugin paroller.js v1.3.0
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 **/
(function (factory) {
    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var setDirection = {
        bgVertical: function (elem, bgOffset) {
            return elem.css({'background-position': 'center ' + -bgOffset + 'px'});
        },
        bgHorizontal: function (elem, bgOffset) {
            return elem.css({'background-position': -bgOffset + 'px' + ' center'});
        },
        vertical: function (elem, elemOffset) {
            return elem.css({
                '-webkit-transform': 'translateY(' + elemOffset + 'px)',
                '-moz-transform': 'translateY(' + elemOffset + 'px)',
                'transform': 'translateY(' + elemOffset + 'px)',
                'transition': 'transform linear',
                'will-change': 'transform'
            });
        },
        horizontal: function (elem, elemOffset) {
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)',
                '-moz-transform': 'translateX(' + elemOffset + 'px)',
                'transform': 'translateX(' + elemOffset + 'px)',
                'transition': 'transform linear',
                'will-change': 'transform'
            });
        }
    };

    $.fn.paroller = function (options) {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // default options
        var options = $.extend({
            factor: 0, // - to +
            type: 'background', // foreground
            direction: 'vertical' // horizontal
        }, options);

        return this.each(function () {
            var working = false;
            var $this = $(this);
            var offset = $this.offset().top;
            var height = $this.outerHeight();
            var dataFactor = $this.data('paroller-factor');
            var dataType = $this.data('paroller-type');
            var dataDirection = $this.data('paroller-direction');

            var factor = (dataFactor) ? dataFactor : options.factor;
            var type = (dataType) ? dataType : options.type;
            var direction = (dataDirection) ? dataDirection : options.direction;
            var bgOffset = Math.round(offset * factor);
            var transform = Math.round((offset - (windowHeight / 2) + height) * factor);

            if (type == 'background') {
                if (direction == 'vertical') {
                    setDirection.bgVertical($this, bgOffset);
                }
                else if (direction == 'horizontal') {
                    setDirection.bgHorizontal($this, bgOffset);
                }
            }
            else if (type == 'foreground') {
                if (direction == 'vertical') {
                    setDirection.vertical($this, transform);
                }
                else if (direction == 'horizontal') {
                    setDirection.horizontal($this, transform);
                }
            }

            var scrollAction = function () {
                working = false;
            };

            $(window).on('scroll', function () {
                if (!working) {
                    var scrolling = $(this).scrollTop();
                    documentHeight = $(document).height();

                    bgOffset = Math.round((offset - scrolling) * factor);
                    transform = Math.round(((offset - (windowHeight / 2) + height) - scrolling) * factor);

                    if (type == 'background') {
                        if (direction == 'vertical') {
                            setDirection.bgVertical($this, bgOffset);
                        }
                        else if (direction == 'horizontal') {
                            setDirection.bgHorizontal($this, bgOffset);
                        }
                    }
                    else if ((type == 'foreground') && (scrolling <= documentHeight)) {
                        if (direction == 'vertical') {
                            setDirection.vertical($this, transform);
                        }
                        else if (direction == 'horizontal') {
                            setDirection.horizontal($this, transform);
                        }
                    }

                    window.requestAnimationFrame(scrollAction);
                    working = true;
                }
            }).trigger('scroll');
        });
    };
});