(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("EmblaCarousel", [], factory);
	else if(typeof exports === 'object')
		exports["EmblaCarousel"] = factory();
	else
		root["EmblaCarousel"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Vector1D(value) {
  var state = {
    value: value
  };

  function get() {
    return state.value;
  }

  function set(v) {
    state.value = v.get();
    return self;
  }

  function add(v) {
    state.value += v.get();
    return self;
  }

  function subtract(v) {
    state.value -= v.get();
    return self;
  }

  function multiply(n) {
    state.value *= n;
    return self;
  }

  function divide(n) {
    state.value /= n;
    return self;
  }

  function setNumber(n) {
    state.value = n;
    return self;
  }

  function addNumber(n) {
    state.value += n;
    return self;
  }

  function subtractNumber(n) {
    state.value -= n;
    return self;
  }

  function magnitude() {
    return get();
  }

  function normalize() {
    var m = magnitude();
    if (m !== 0) divide(m);
    return self;
  }

  var self = {
    add: add,
    addNumber: addNumber,
    divide: divide,
    get: get,
    magnitude: magnitude,
    multiply: multiply,
    normalize: normalize,
    set: set,
    setNumber: setNumber,
    subtract: subtract,
    subtractNumber: subtractNumber
  };
  return Object.freeze(self);
}

exports.Vector1D = Vector1D;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rectWidth(node) {
  return node.getBoundingClientRect().width;
}

exports.rectWidth = rectWidth;

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}

exports.map = map;

function arrayFromCollection(nodeList) {
  return Array.prototype.slice.call(nodeList);
}

exports.arrayFromCollection = arrayFromCollection;

function debounce(callback, time) {
  var timeout = {
    id: 0
  };
  return function () {
    window.clearTimeout(timeout.id);
    timeout.id = window.setTimeout(callback, time) || 0;
  };
}

exports.debounce = debounce;

function groupNumbers(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}

exports.groupNumbers = groupNumbers;

function roundToDecimals(decimalPoints) {
  var pow = Math.pow(10, decimalPoints);
  return function (n) {
    return Math.round(n * pow) / pow;
  };
}

exports.roundToDecimals = roundToDecimals;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Limit(params) {
  var min = params.min,
      max = params.max;
  var loopLimits = {
    max: min,
    min: max
  };
  var constrainLimits = {
    min: min,
    max: max
  };

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function reachedWhich(n) {
    var isMin = reachedMin(n) && 'min';
    var isMax = reachedMax(n) && 'max';
    return isMin || isMax || '';
  }

  function loop(n) {
    var which = reachedWhich(n);
    return which ? loopLimits[which] : n;
  }

  function constrain(n) {
    var which = reachedWhich(n);
    return which ? constrainLimits[which] : n;
  }

  var self = {
    constrain: constrain,
    loop: loop,
    max: max,
    min: min,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin
  };
  return Object.freeze(self);
}

exports.Limit = Limit;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function Direction(value) {
  var direction = vector1d_1.Vector1D(normalize(value));
  var get = direction.get;

  function normalize(n) {
    return n === 0 ? 0 : n / Math.abs(n);
  }

  function set(v) {
    var d = normalize(v.get());
    if (d !== 0) direction.setNumber(d);
    return self;
  }

  var self = {
    get: get,
    set: set
  };
  return Object.freeze(self);
}

exports.Direction = Direction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Counter(params) {
  var start = params.start,
      limit = params.limit,
      loop = params.loop;
  var min = limit.min,
      max = limit.max;
  var type = loop ? 'loop' : 'constrain';
  var state = {
    value: withinLimit(start)
  };

  function get() {
    return state.value;
  }

  function set(n) {
    state.value = withinLimit(n);
    return self;
  }

  function withinLimit(n) {
    return limit[type](n);
  }

  function add(n) {
    if (n !== 0) {
      var one = n / Math.abs(n);
      set(get() + one);
      return add(n + one * -1);
    }

    return self;
  }

  function clone() {
    var s = get();
    return Counter({
      start: s,
      limit: limit,
      loop: loop
    });
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    max: max,
    min: min,
    set: set
  };
  return Object.freeze(self);
}

exports.Counter = Counter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventStore() {
  var state = {
    listeners: []
  };

  function add(node, type, handler) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    node.addEventListener(type, handler, options);
    state.listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    state.listeners.filter(function (remove) {
      return remove();
    });
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return Object.freeze(self);
}

exports.EventStore = EventStore;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var engine_1 = __webpack_require__(8);

var eventDispatcher_1 = __webpack_require__(25);

var eventStore_1 = __webpack_require__(5);

var options_1 = __webpack_require__(26);

var utils_1 = __webpack_require__(1);

function EmblaCarousel(sliderRoot) {
  var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = {
    active: false,
    windowWidth: 0
  };

  var options = _extends({}, options_1.defaultOptions, userOptions);

  var events = eventDispatcher_1.EventDispatcher();
  var eventStore = eventStore_1.EventStore();
  var debouncedResize = utils_1.debounce(resize, 500);
  var changeOptions = reActivate;
  var slider = {};
  var elements = {};
  var on = events.on,
      off = events.off;
  activate(options);

  function storeElements() {
    if (!sliderRoot) {
      throw new Error('No root element provided 😢');
    }

    var selector = options.containerSelector;
    var container = sliderRoot.querySelector(selector);

    if (!container) {
      throw new Error('No valid container element found 😢');
    }

    elements.root = sliderRoot;
    elements.container = container;
    elements.slides = utils_1.arrayFromCollection(container.children);
    state.active = true;
  }

  function activate() {
    var userOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFirstInit = !state.active;
    state.windowWidth = window.innerWidth;
    storeElements();

    if (elements.slides.length > 0) {
      var root = elements.root,
          container = elements.container,
          slides = elements.slides;

      var newOpt = _extends(options, userOpt);

      var engine = engine_1.Engine(root, container, slides, newOpt, events);

      var newSlider = _extends(slider, engine);

      eventStore.add(window, 'resize', debouncedResize);
      slides.forEach(slideFocusEvent);
      slider.translate.to(slider.mover.location);

      if (options.loop && slides.length === 1) {
        return activate({
          loop: false
        });
      }

      if (options.draggable) activateDragFeature();
      if (options.loop) slider.slideLooper.loop(slides);

      if (isFirstInit) {
        events.on('select', toggleSelectedClass);
        events.on('init', toggleSelectedClass);
        setTimeout(function () {
          return events.dispatch('init');
        }, 0);
      }
    }
  }

  function activateDragFeature() {
    var root = elements.root.classList;
    var draggingClass = options.draggingClass,
        draggableClass = options.draggableClass;
    slider.pointer.addActivationEvents();
    events.on('dragStart', function () {
      return root.add(draggingClass);
    });
    events.on('dragEnd', function () {
      return root.remove(draggingClass);
    });
    root.add(draggableClass);
  }

  function toggleSelectedClass() {
    var slides = elements.slides;
    var index = slider.index,
        indexPrevious = slider.indexPrevious,
        indexGroups = slider.indexGroups;
    var selected = options.selectedClass;
    var previousGroup = indexGroups[indexPrevious.get()];
    var currentGroup = indexGroups[index.get()];
    previousGroup.forEach(function (i) {
      return slides[i].classList.remove(selected);
    });
    currentGroup.forEach(function (i) {
      return slides[i].classList.add(selected);
    });
  }

  function slideFocusEvent(slide, index) {
    var focus = function focus() {
      var groupIndex = Math.floor(index / options.slidesToScroll);
      var selectedGroup = index ? groupIndex : index;
      sliderRoot.scrollLeft = 0;
      scrollTo(selectedGroup);
    };

    eventStore.add(slide, 'focus', focus, true);
  }

  function reActivate() {
    var userOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.active) {
      var startIndex = slider.index.get();
      var indexOpt = {
        startIndex: startIndex
      };

      var newOpt = _extends(indexOpt, userOpt);

      deActivate();
      activate(newOpt);
    }
  }

  function deActivate() {
    var root = elements.root,
        container = elements.container,
        slides = elements.slides;
    slider.pointer.removeAllEvents();
    slider.animation.stop();
    eventStore.removeAll();
    root.classList.remove(options.draggableClass);
    container.style.transform = '';
    slides.forEach(function (s) {
      return s.style.left = '';
    });
  }

  function destroy() {
    state.active = false;
    deActivate();
    events.dispatch('destroy');
  }

  function resize() {
    var newWindowWidth = window.innerWidth;

    if (newWindowWidth !== state.windowWidth) {
      state.windowWidth = newWindowWidth;
      reActivate();
      events.dispatch('resize');
    }
  }

  function scrollSnapList() {
    return slider.indexGroups.map(function (g) {
      return {
        slideIndexes: g,
        slideNodes: g.map(function (i) {
          return elements.slides[i];
        })
      };
    });
  }

  function scrollNext() {
    var next = slider.index.clone().add(1);
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scrollTo.index(next.get(), -1);
  }

  function scrollPrev() {
    var prev = slider.index.clone().add(-1);
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scrollTo.index(prev.get(), 1);
  }

  function scrollTo(index) {
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scrollTo.index(index, 0);
  }

  function canScrollPrev() {
    var index = slider.index;
    return options.loop || index.get() !== index.min;
  }

  function canScrollNext() {
    var index = slider.index;
    return options.loop || index.get() !== index.max;
  }

  function selectedScrollSnap() {
    return slider.index.get();
  }

  function previousScrollSnap() {
    return slider.indexPrevious.get();
  }

  function scrollProgress() {
    return slider.scrollProgress.get();
  }

  function clickAllowed() {
    return slider.pointer.clickAllowed();
  }

  function containerNode() {
    return elements.container;
  }

  function slideNodes() {
    return elements.slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    changeOptions: changeOptions,
    clickAllowed: clickAllowed,
    containerNode: containerNode,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollProgress: scrollProgress,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes
  };
  return Object.freeze(self);
}

exports.EmblaCarousel = EmblaCarousel;
exports["default"] = EmblaCarousel; // @ts-ignore

module.exports = EmblaCarousel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var alignSize_1 = __webpack_require__(9);

var animation_1 = __webpack_require__(10);

var chunkSize_1 = __webpack_require__(11);

var counter_1 = __webpack_require__(4);

var dragBehaviour_1 = __webpack_require__(12);

var limit_1 = __webpack_require__(2);

var mover_1 = __webpack_require__(13);

var pointer_1 = __webpack_require__(14);

var scrollBounds_1 = __webpack_require__(15);

var scrollContain_1 = __webpack_require__(16);

var scrollLimit_1 = __webpack_require__(17);

var scrollLooper_1 = __webpack_require__(18);

var scrollProgress_1 = __webpack_require__(19);

var scrollSnap_1 = __webpack_require__(20);

var scrollTarget_1 = __webpack_require__(21);

var scrollTo_1 = __webpack_require__(22);

var slideLooper_1 = __webpack_require__(23);

var translate_1 = __webpack_require__(24);

var utils_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      startIndex = options.startIndex,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      containScroll = options.containScroll; // Measurements

  var containerSize = utils_1.rectWidth(container);
  var chunkSize = chunkSize_1.ChunkSize(containerSize);
  var viewSize = chunkSize.root;
  var slideIndexes = Object.keys(slides).map(Number);
  var slideSizes = slides.map(utils_1.rectWidth).map(chunkSize.measure);
  var groupedSizes = utils_1.groupNumbers(slideSizes, slidesToScroll);
  var snapSizes = groupedSizes.map(function (g) {
    return g.reduce(function (a, s) {
      return a + s;
    });
  });
  var contentSize = slideSizes.reduce(function (a, s) {
    return a + s;
  });
  var alignSize = alignSize_1.AlignSize({
    align: align,
    viewSize: viewSize
  });
  var scrollSnap = scrollSnap_1.ScrollSnap({
    snapSizes: snapSizes,
    alignSize: alignSize,
    loop: loop
  });
  var scrollContain = scrollContain_1.ScrollContain({
    alignSize: alignSize,
    contentSize: contentSize,
    slideIndexes: slideIndexes,
    slidesToScroll: slidesToScroll,
    viewSize: viewSize
  });
  var contain = !loop && containScroll;
  var defaultSnaps = snapSizes.map(scrollSnap.measure);
  var containedSnaps = scrollContain.snaps(defaultSnaps);
  var scrollSnaps = contain ? containedSnaps : defaultSnaps; // Index

  var defaultIndexes = utils_1.groupNumbers(slideIndexes, slidesToScroll);
  var containedIndexes = scrollContain.indexes(defaultSnaps);
  var indexMin = 0;
  var indexMax = scrollSnaps.length - 1;
  var indexGroups = contain ? containedIndexes : defaultIndexes;
  var indexSpan = limit_1.Limit({
    min: indexMin,
    max: indexMax
  });
  var index = counter_1.Counter({
    limit: indexSpan,
    start: startIndex,
    loop: loop
  });
  var indexPrevious = index.clone(); // ScrollLimit

  var scrollLimit = scrollLimit_1.ScrollLimit({
    loop: loop,
    chunkSize: chunkSize,
    contentSize: contentSize
  });
  var limit = scrollLimit.measure(scrollSnaps); // Direction

  var direction = function direction() {
    return pointer.isDown() ? pointer.direction.get() : engine.mover.direction.get();
  }; // Draw


  var update = function update() {
    engine.mover.seek(target).update();

    if (!pointer.isDown()) {
      if (!loop) engine.scrollBounds.constrain(target);
      if (engine.mover.settle(target)) engine.animation.stop();
    }

    if (loop) {
      engine.scrollLooper.loop(direction());
      engine.slideLooper.loop(slides);
    }

    if (engine.mover.location.get() !== target.get()) {
      events.dispatch('scroll');
    }

    engine.translate.to(engine.mover.location);
    engine.animation.proceed();
  }; // Shared


  var animation = animation_1.Animation(update);
  var startLocation = scrollSnaps[index.get()];
  var location = vector1d_1.Vector1D(startLocation);
  var target = vector1d_1.Vector1D(startLocation);
  var mover = mover_1.Mover({
    location: location,
    speed: speed,
    mass: 1
  });
  var scrollTo = scrollTo_1.ScrollTo({
    animation: animation,
    events: events,
    index: index,
    indexPrevious: indexPrevious,
    scrollTarget: scrollTarget_1.ScrollTarget({
      align: align,
      contentSize: contentSize,
      dragFree: dragFree,
      index: index,
      limit: limit,
      loop: loop,
      scrollSnaps: scrollSnaps,
      snapSizes: snapSizes,
      target: target
    }),
    target: target
  }); // Pointer

  var pointer = dragBehaviour_1.DragBehaviour({
    animation: animation,
    dragFree: dragFree,
    element: root,
    events: events,
    index: index,
    limit: limit,
    location: location,
    loop: loop,
    mover: mover,
    pointer: pointer_1.Pointer(chunkSize),
    scrollTo: scrollTo,
    snapSizes: snapSizes,
    target: target
  }); // Slider

  var engine = {
    animation: animation,
    index: index,
    indexGroups: indexGroups,
    indexPrevious: indexPrevious,
    mover: mover,
    pointer: pointer,
    scrollBounds: scrollBounds_1.ScrollBounds({
      animation: animation,
      limit: limit,
      location: location,
      mover: mover,
      tolerance: 50
    }),
    scrollLooper: scrollLooper_1.ScrollLooper({
      contentSize: contentSize,
      limit: limit,
      location: location,
      vectors: [location, target]
    }),
    scrollProgress: scrollProgress_1.ScrollProgress({
      limit: limit,
      location: location
    }),
    scrollTo: scrollTo,
    slideLooper: slideLooper_1.SlideLooper({
      contentSize: contentSize,
      location: location,
      scrollSnaps: scrollSnaps,
      slideSizes: slideSizes,
      viewSize: viewSize
    }),
    target: target,
    translate: translate_1.Translate(container)
  };
  return Object.freeze(engine);
}

exports.Engine = Engine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function AlignSize(params) {
  var viewSize = params.viewSize,
      align = params.align;
  var alignment = {
    start: start,
    center: center,
    end: end
  };

  function start(n) {
    return n * 0;
  }

  function center(n) {
    return (viewSize - n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function measure(n) {
    return alignment[align](n);
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.AlignSize = AlignSize;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Animation(callback) {
  var run = requestAnimationFrame.bind(window);
  var end = cancelAnimationFrame.bind(window);
  var state = {
    animationFrame: 0
  };

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!state.animationFrame) cb();
    };
  }

  function start() {
    state.animationFrame = run(callback);
  }

  function stop() {
    end(state.animationFrame);
    state.animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return Object.freeze(self);
}

exports.Animation = Animation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ChunkSize(root) {
  var size = {
    root: root
  };

  function measure(n) {
    return n / size.root * 100;
  }

  var self = {
    measure: measure,
    root: 100
  };
  return Object.freeze(self);
}

exports.ChunkSize = ChunkSize;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(3);

var eventStore_1 = __webpack_require__(5);

var vector1d_1 = __webpack_require__(0);

function DragBehaviour(params) {
  var target = params.target,
      mover = params.mover,
      dragFree = params.dragFree,
      animation = params.animation;
  var element = params.element,
      pointer = params.pointer,
      location = params.location,
      events = params.events,
      limit = params.limit;
  var direction = pointer.direction;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var startX = vector1d_1.Vector1D(0);
  var startY = vector1d_1.Vector1D(0);
  var dragStartLocation = vector1d_1.Vector1D(0);
  var activationEvents = eventStore_1.EventStore();
  var interactionEvents = eventStore_1.EventStore();
  var snapForceBoost = {
    mouse: 2.5,
    touch: 3.5
  };
  var freeForceBoost = {
    mouse: 4,
    touch: 7
  };
  var snapSpeed = {
    mouse: 12,
    touch: 14
  };
  var freeSpeed = {
    mouse: 6,
    touch: 5
  };
  var dragThreshold = 4;
  var state = {
    isDown: false,
    isMouse: false,
    preventClick: false,
    preventScroll: false
  };

  function addActivationEvents() {
    var node = element;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'mousedown', down).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !state.isMouse ? element : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function removeAllEvents() {
    activationEvents.removeAll();
    interactionEvents.removeAll();
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function movementSpeed() {
    var speed = dragFree ? freeSpeed : snapSpeed;
    var type = state.isMouse ? 'mouse' : 'touch';
    return speed[type];
  }

  function pointerForceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = state.isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function seekTargetBy(force) {
    var scrollTo = params.scrollTo,
        snapSizes = params.snapSizes,
        index = params.index;
    var forceAbs = Math.abs(force);
    var halfSnap = snapSizes[index.get()] / 2;
    var reachedLimit = limit.reachedAny(target.get() + force);
    var seekNext = forceAbs > dragThreshold && forceAbs < halfSnap;

    if (!dragFree && !reachedLimit && seekNext) {
      var indexDiff = direction_1.Direction(force).get() * -1;
      var next = index.clone().add(indexDiff);
      scrollTo.index(next.get(), 0);
    } else {
      scrollTo.distance(force);
    }
  }

  function down(evt) {
    var isMouse = evt.type === 'mousedown';
    var diffToTarget = target.get() - location.get();
    var isMoving = Math.abs(diffToTarget) >= 2;
    var clearPreventClick = isMouse || !isMoving;
    var isNotFocusNode = !isFocusNode(evt.target);
    var preventDefault = isMoving || isMouse && isNotFocusNode;
    if (isMouse && evt.button !== 0) return;
    state.isDown = true;
    state.isMouse = isMouse;
    pointer.down(evt);
    dragStartLocation.set(target);
    target.set(location);
    mover.useDefaultMass().useSpeed(80);
    addInteractionEvents();
    animation.start();
    startX.set(pointer.read(evt, 'x'));
    startY.set(pointer.read(evt, 'y'));
    events.dispatch('dragStart');
    if (clearPreventClick) state.preventClick = false;
    if (preventDefault) evt.preventDefault();
  }

  function move(evt) {
    if (!state.preventScroll && !state.isMouse) {
      var X = pointer.read(evt, 'x').get();
      var Y = pointer.read(evt, 'y').get();
      var diffX = Math.abs(X - startX.get());
      var diffY = Math.abs(Y - startY.get());
      state.preventScroll = diffX > diffY;
      if (!state.preventScroll && !state.preventClick) return up();
    }

    var diff = pointer.move(evt);
    var reachedLimit = limit.reachedAny(location.get());
    var resist = !params.loop && reachedLimit ? 2 : 1;
    var preventClick = !state.preventClick && diff;
    if (preventClick) state.preventClick = true;
    target.addNumber(diff / resist);
    evt.preventDefault();
  }

  function up() {
    var force = pointer.up() * pointerForceBoost();
    var diffToTarget = target.get() - dragStartLocation.get();
    var isMoving = Math.abs(diffToTarget) >= 0.5;
    var preventClick = isMoving && !state.isMouse;
    if (preventClick) state.preventClick = true;
    state.isMouse = false;
    state.preventScroll = false;
    state.isDown = false;
    interactionEvents.removeAll();
    mover.useSpeed(movementSpeed());
    seekTargetBy(force);
    events.dispatch('dragEnd');
  }

  function click(evt) {
    if (state.preventClick) evt.preventDefault();
  }

  function clickAllowed() {
    return !state.preventClick;
  }

  function isDown() {
    return state.isDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    clickAllowed: clickAllowed,
    direction: direction,
    isDown: isDown,
    removeAllEvents: removeAllEvents
  };
  return Object.freeze(self);
}

exports.DragBehaviour = DragBehaviour;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(3);

var utils_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function Mover(params) {
  var roundToTwoDecimals = utils_1.roundToDecimals(2);
  var location = params.location,
      speed = params.speed,
      mass = params.mass;
  var velocity = vector1d_1.Vector1D(0);
  var acceleration = vector1d_1.Vector1D(0);
  var attraction = vector1d_1.Vector1D(0);
  var direction = direction_1.Direction(0);
  var state = {
    speed: speed,
    mass: mass
  };

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(force) {
    force.divide(state.mass);
    acceleration.add(force);
  }

  function seek(target) {
    attraction.set(target).subtract(location);
    var mag = attraction.magnitude();
    var m = utils_1.map(mag, 0, 100, 0, state.speed);
    direction.set(attraction);
    attraction.normalize().multiply(m).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(target) {
    var diff = target.get() - location.get();
    var diffRounded = roundToTwoDecimals(diff);
    var hasSettled = !diffRounded;
    if (hasSettled) location.set(target);
    return hasSettled;
  }

  function useSpeed(desired) {
    state.speed = desired;
    return self;
  }

  function useDefaultSpeed() {
    useSpeed(speed);
    return self;
  }

  function useMass(desired) {
    state.mass = desired;
    return self;
  }

  function useDefaultMass() {
    useMass(mass);
    return self;
  }

  var self = {
    direction: direction,
    location: location,
    seek: seek,
    settle: settle,
    update: update,
    useDefaultMass: useDefaultMass,
    useDefaultSpeed: useDefaultSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return Object.freeze(self);
}

exports.Mover = Mover;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(3);

var vector1d_1 = __webpack_require__(0);

function Pointer(size) {
  var coords = {
    x: 'clientX',
    y: 'clientY'
  };
  var startDrag = vector1d_1.Vector1D(0);
  var diffDrag = vector1d_1.Vector1D(0);
  var lastDrag = vector1d_1.Vector1D(0);
  var pointValue = vector1d_1.Vector1D(0);
  var direction = direction_1.Direction(0);
  var trackInterval = 10;
  var state = {
    isMouse: false,
    trackPoints: [],
    trackTime: new Date().getTime()
  };

  function read(evt, axis) {
    var isMouse = state.isMouse;
    var c = coords[axis];
    var value = isMouse ? evt[c] : evt.touches[0][c];
    return pointValue.setNumber(value);
  }

  function down(evt) {
    state.isMouse = !!evt.type.match(/mouse/);
    var point = read(evt, 'x');
    startDrag.set(point);
    lastDrag.set(point);
    return size.measure(startDrag.get());
  }

  function move(evt) {
    var point = read(evt, 'x');
    var time2 = new Date().getTime();
    var time1 = state.trackTime;

    if (time2 - time1 >= trackInterval) {
      state.trackPoints.push(point.get());
      state.trackTime = time2;
    }

    diffDrag.set(point).subtract(lastDrag);
    direction.set(diffDrag);
    lastDrag.set(point);
    return size.measure(diffDrag.get());
  }

  function up() {
    var currentPoint = lastDrag.get();
    var trackLength = state.isMouse ? 5 : 4;
    lastDrag.setNumber(state.trackPoints.slice(-trackLength).map(function (point) {
      return currentPoint - point;
    }).sort(function (p1, p2) {
      return Math.abs(p1) < Math.abs(p2) ? 1 : -1;
    })[0] || 0);
    state.trackPoints = [];
    return size.measure(lastDrag.get());
  }

  var self = {
    direction: direction,
    down: down,
    move: move,
    read: read,
    up: up
  };
  return Object.freeze(self);
}

exports.Pointer = Pointer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollBounds(params) {
  var limit = params.limit,
      location = params.location,
      mover = params.mover,
      animation = params.animation,
      tolerance = params.tolerance;
  var min = limit.min,
      max = limit.max,
      reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;
  var state = {
    timeout: 0
  };

  function shouldConstrain(v) {
    var l = location.get();
    var constrainMin = reachedMin(l) && v.get() !== min;
    var constrainMax = reachedMax(l) && v.get() !== max;
    return constrainMin || constrainMax;
  }

  function constrain(v) {
    if (!state.timeout && shouldConstrain(v)) {
      var constraint = limit.constrain(v.get());
      state.timeout = window.setTimeout(function () {
        v.setNumber(constraint);
        mover.useSpeed(10).useMass(3);
        animation.start();
        state.timeout = 0;
      }, tolerance);
    }
  }

  var self = {
    constrain: constrain
  };
  return Object.freeze(self);
}

exports.ScrollBounds = ScrollBounds;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(2);

var utils_1 = __webpack_require__(1);

function ScrollContain(params) {
  var alignSize = params.alignSize,
      contentSize = params.contentSize,
      viewSize = params.viewSize;
  var slideIndexes = params.slideIndexes,
      slidesToScroll = params.slidesToScroll;
  var indexGroups = utils_1.groupNumbers(slideIndexes, slidesToScroll);
  var contentExceedsView = contentSize > viewSize;
  var bounds = limit_1.Limit({
    min: -contentSize + viewSize,
    max: 0
  });

  function groupDuplicates(start, end) {
    var duplicates = indexGroups.slice(start, end);
    return duplicates.reduce(function (a, g) {
      return a.concat(g);
    }, []);
  }

  function findDuplicates(scrollSnaps) {
    var firstSnap = scrollSnaps[0];
    var lastSnap = scrollSnaps[scrollSnaps.length - 1];
    var min = scrollSnaps.lastIndexOf(firstSnap) + 1;
    var max = scrollSnaps.indexOf(lastSnap);
    return limit_1.Limit({
      min: min,
      max: max
    });
  }

  function containToView(scrollSnaps) {
    var min = bounds.min,
        max = bounds.max;
    return scrollSnaps.map(function (scrollSnap) {
      if (scrollSnap < min) return min;
      if (scrollSnap > max) return max;
      return scrollSnap;
    });
  }

  function indexes(scrollSnaps) {
    if (!contentExceedsView) return [slideIndexes];

    var _findDuplicates = findDuplicates(containToView(scrollSnaps)),
        min = _findDuplicates.min,
        max = _findDuplicates.max;

    var start = groupDuplicates(0, min);
    var middle = indexGroups.slice(min, max);
    var end = groupDuplicates(max, scrollSnaps.length);
    return [start].concat(middle.concat([end]));
  }

  function snaps(scrollSnaps) {
    if (!contentExceedsView) return [alignSize.measure(contentSize)];
    var containedSnaps = containToView(scrollSnaps);

    var _findDuplicates2 = findDuplicates(containedSnaps),
        min = _findDuplicates2.min,
        max = _findDuplicates2.max;

    return containedSnaps.slice(min - 1, max + 1);
  }

  var self = {
    indexes: indexes,
    snaps: snaps
  };
  return Object.freeze(self);
}

exports.ScrollContain = ScrollContain;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(2);

function ScrollLimit(params) {
  var contentSize = params.contentSize,
      chunkSize = params.chunkSize,
      loop = params.loop;
  var loopSize = -contentSize + chunkSize.measure(1);

  function measure(scrollSnaps) {
    var startSnap = scrollSnaps[0];
    var endSnap = scrollSnaps[scrollSnaps.length - 1];
    var max = startSnap;
    var min = loop ? max + loopSize : endSnap;
    return limit_1.Limit({
      max: max,
      min: min
    });
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.ScrollLimit = ScrollLimit;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollLooper(params) {
  var limit = params.limit,
      location = params.location,
      contentSize = params.contentSize,
      vectors = params.vectors;
  var reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;

  function shouldLoop(direction) {
    var reachedLimit = direction === -1 ? reachedMin : reachedMax;
    return direction !== 0 && reachedLimit(location.get());
  }

  function loop(direction) {
    if (shouldLoop(direction)) {
      var loopDistance = contentSize * (direction * -1);
      vectors.forEach(function (v) {
        return v.addNumber(loopDistance);
      });
    }
  }

  var self = {
    loop: loop
  };
  return Object.freeze(self);
}

exports.ScrollLooper = ScrollLooper;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollProgress(params) {
  var location = params.location,
      limit = params.limit;
  var min = limit.min,
      max = limit.max;
  var scrollLimit = min - max;

  function get() {
    var currentLocation = location.get() - max;
    return currentLocation / scrollLimit;
  }

  var self = {
    get: get
  };
  return Object.freeze(self);
}

exports.ScrollProgress = ScrollProgress;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var counter_1 = __webpack_require__(4);

var limit_1 = __webpack_require__(2);

function ScrollSnap(params) {
  var snapSizes = params.snapSizes,
      alignSize = params.alignSize,
      loop = params.loop;
  var limit = limit_1.Limit({
    min: 0,
    max: snapSizes.length - 1
  });
  var counter = counter_1.Counter({
    limit: limit,
    start: 0,
    loop: loop
  });
  var alignSizes = snapSizes.map(alignSize.measure);
  var distancesBetween = distancesBetweenScrollSnaps();

  function distancesBetweenScrollSnaps() {
    return snapSizes.map(function (size, index) {
      var next = counter.clone().set(index + 1);
      return size + alignSizes[index] - alignSizes[next.get()];
    });
  }

  function measure(size, index) {
    var sizes = distancesBetween.slice(0, index);
    return sizes.reduce(function (a, d) {
      return a - d;
    }, alignSizes[0]);
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.ScrollSnap = ScrollSnap;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollTarget(params) {
  var loop = params.loop,
      limit = params.limit,
      scrollSnaps = params.scrollSnaps,
      contentSize = params.contentSize;
  var reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax,
      reachedAny = limit.reachedAny;
  var snapBounds = calculateSnapBounds();

  function calculateSnapBounds() {
    var align = params.align,
        snapSizes = params.snapSizes;
    var counter = params.index.clone();
    return snapSizes.reduce(function (bounds, size, i) {
      var next = counter.set(i).add(align === 'end' ? 1 : 0);
      var end = scrollSnaps[i] - snapSizes[next.get()] / 2;
      var start = !i ? scrollSnaps[0] : bounds[i - 1].end;
      return bounds.concat([{
        start: start,
        end: end
      }]);
    }, []);
  }

  function offsetToSnap(target) {
    var distance = target.distance,
        index = target.index;
    var lastSnap = scrollSnaps[params.index.max];
    var addOffset = loop && distance < lastSnap && index === 0;
    var offset = addOffset ? distance + contentSize : distance;
    return scrollSnaps[index] - offset;
  }

  function findTargetSnapAt(distance) {
    while (reachedMax(distance)) {
      distance -= contentSize;
    }

    while (reachedMin(distance)) {
      distance += contentSize;
    }

    var foundIndex = snapBounds.reduce(function (a, b, i) {
      return distance < b.start && distance > b.end ? i : a;
    }, 0);
    return {
      distance: distance,
      index: foundIndex
    };
  }

  function minDistance(d1, d2) {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  }

  function byIndex(index, direction) {
    var targetVector = params.target.get();
    var distanceToSnap = scrollSnaps[index] - targetVector;
    var target = {
      distance: distanceToSnap,
      index: index
    };

    if (loop) {
      var d1 = distanceToSnap;
      var d2 = contentSize + distanceToSnap;
      var d3 = distanceToSnap - contentSize;

      if (direction && params.index.max === 1) {
        var shortest = minDistance(d1, direction === 1 ? d2 : d3);
        target.distance = Math.abs(shortest) * direction;
      } else {
        target.distance = minDistance(minDistance(d1, d2), d3);
      }
    }

    return target;
  }

  function byDistance(force) {
    var target = params.target,
        dragFree = params.dragFree,
        index = params.index;
    var distance = target.get() + force;
    var targetSnap = findTargetSnapAt(distance);
    var reachedEdge = !loop && reachedAny(distance);

    if (reachedEdge || dragFree) {
      var min = index.min,
          max = index.max;
      var edgeIndex = reachedMax(distance) ? min : max;
      var targetIndex = reachedEdge ? edgeIndex : targetSnap.index;
      return {
        distance: force,
        index: targetIndex
      };
    } else {
      var currentSnap = {
        distance: distance,
        index: index.get()
      };
      var snapPoint = force === 0 ? currentSnap : targetSnap;
      var snapDistance = force + offsetToSnap(snapPoint);
      return {
        distance: snapDistance,
        index: snapPoint.index
      };
    }
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex
  };
  return Object.freeze(self);
}

exports.ScrollTarget = ScrollTarget;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ScrollTo(params) {
  var indexCurrent = params.index,
      scrollTarget = params.scrollTarget,
      animation = params.animation;
  var indexPrevious = params.indexPrevious,
      events = params.events,
      targetDistance = params.target;

  function scrollTo(target) {
    var distanceDiff = target.distance;
    var indexDiff = target.index !== indexCurrent.get();

    if (distanceDiff) {
      animation.start();
      targetDistance.addNumber(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      events.dispatch('select');
    }
  }

  function distance(n) {
    var target = scrollTarget.byDistance(n);
    scrollTo(target);
  }

  function index(n, direction) {
    var targetIndex = indexCurrent.clone().set(n);
    var target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }

  var self = {
    distance: distance,
    index: index
  };
  return Object.freeze(self);
}

exports.ScrollTo = ScrollTo;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function SlideLooper(params) {
  var contentSize = params.contentSize,
      viewSize = params.viewSize,
      slideSizes = params.slideSizes,
      scrollSnaps = params.scrollSnaps;
  var ascItems = Object.keys(slideSizes).map(Number);
  var descItems = ascItems.slice().reverse();
  var loopPoints = startPoints().concat(endPoints());

  function subtractItemSizesOf(indexes, from) {
    return indexes.reduce(function (a, i) {
      var size = slideSizes[i];
      return a - size;
    }, from);
  }

  function loopItemsIn(sizeOfGap, indexes) {
    return indexes.reduce(function (a, i) {
      var gapLeft = subtractItemSizesOf(a, sizeOfGap);
      return gapLeft > 0 ? a.concat([i]) : a;
    }, []);
  }

  function loopStart(sizeOfGap, indexes, from) {
    return indexes.reduce(function (a, i) {
      var gapFilled = a + slideSizes[i];
      return gapFilled < sizeOfGap ? gapFilled : a;
    }, from);
  }

  function loopPoint(indexes, from, direction) {
    var slideCount = ascItems.length - 1;
    return subtractItemSizesOf(indexes.map(function (i) {
      return (i + direction) % slideCount;
    }), from);
  }

  function loopPointsFor(indexes, from, direction) {
    var ascIndexes = indexes.slice().sort(function (a, b) {
      return a - b;
    });
    return ascIndexes.map(function (i, j) {
      var index = i;
      var initial = contentSize * (!direction ? 0 : -1);
      var offset = contentSize * (!direction ? 1 : 0);
      var slidesInSpan = ascIndexes.slice(0, j);
      var point = loopPoint(slidesInSpan, from, direction);
      var location = vector1d_1.Vector1D(-1);
      var target = vector1d_1.Vector1D(0);

      var findTarget = function findTarget(loc) {
        var t = loc > point ? initial : offset;
        return target.setNumber(0).setNumber(t);
      };

      return {
        point: point,
        findTarget: findTarget,
        location: location,
        index: index
      };
    });
  }

  function startPoints() {
    var gap = scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, descItems);
    var start = loopStart(gap, indexes, 0);
    return loopPointsFor(indexes, start, 1);
  }

  function endPoints() {
    var gap = viewSize - scrollSnaps[0] - 1;
    var indexes = loopItemsIn(gap, ascItems);
    var start = loopStart(contentSize, ascItems, -viewSize);
    return loopPointsFor(indexes, -start, 0);
  }

  function loop(slides) {
    var parentLocation = params.location;
    loopPoints.forEach(function (loopTarget) {
      var findTarget = loopTarget.findTarget,
          location = loopTarget.location,
          index = loopTarget.index;
      var target = findTarget(parentLocation.get());

      if (target.get() !== location.get()) {
        slides[index].style.left = "".concat(target.get(), "%");
        location.set(target);
      }
    });
  }

  var self = {
    loop: loop,
    loopPoints: loopPoints
  };
  return Object.freeze(self);
}

exports.SlideLooper = SlideLooper;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(1);

function Translate(node) {
  var roundToTwoDecimals = utils_1.roundToDecimals(2);
  var nodeStyle = node.style;
  var state = {
    value: 0
  };

  function translateX(n) {
    return "translate3d(".concat(n, "%,0px,0px)");
  }

  function to(v) {
    var target = roundToTwoDecimals(v.get());

    if (state.value !== target) {
      state.value = target;
      getComputedStyle(node).transform;
      nodeStyle.transform = translateX(target);
    }
  }

  var self = {
    to: to
  };
  return Object.freeze(self);
}

exports.Translate = Translate;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventDispatcher() {
  var state = {
    destroy: [],
    dragEnd: [],
    dragStart: [],
    init: [],
    resize: [],
    scroll: [],
    select: []
  };

  function dispatch(evt) {
    var eventListeners = state[evt];
    eventListeners.forEach(function (e) {
      return e();
    });
    return self;
  }

  function on(evt, cb) {
    var eventListeners = state[evt];
    state[evt] = eventListeners.concat([cb]);
    return self;
  }

  function off(evt, cb) {
    var eventListeners = state[evt];
    state[evt] = eventListeners.filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    dispatch: dispatch,
    off: off,
    on: on
  };
  return Object.freeze(self);
}

exports.EventDispatcher = EventDispatcher;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = Object.freeze({
  align: 'center',
  containScroll: false,
  containerSelector: '*',
  dragFree: false,
  draggable: true,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  loop: false,
  selectedClass: 'is-selected',
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
});

/***/ })
/******/ ]);
});