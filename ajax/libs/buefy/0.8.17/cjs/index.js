'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-e0c9228b.js');
var helpers = require('./helpers.js');
var __chunk_2 = require('./chunk-805257cc.js');
require('./chunk-be4a5cfb.js');
require('./chunk-82a892f6.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-43b1195e.js');
require('./chunk-4047774d.js');
var autocomplete = require('./autocomplete.js');
var button = require('./button.js');
var carousel = require('./carousel.js');
require('./chunk-8b8384ca.js');
require('./chunk-d68349e6.js');
var checkbox = require('./checkbox.js');
var collapse = require('./collapse.js');
require('./chunk-f7e96f48.js');
require('./chunk-ae7e641a.js');
require('./chunk-ccfba9b8.js');
require('./chunk-4b6b0ba7.js');
var clockpicker = require('./clockpicker.js');
require('./chunk-66dfb443.js');
require('./chunk-79b5defc.js');
var datepicker = require('./datepicker.js');
require('./chunk-49f626b2.js');
var datetimepicker = require('./datetimepicker.js');
require('./chunk-d553b086.js');
var dialog = require('./dialog.js');
var dropdown = require('./dropdown.js');
var field = require('./field.js');
var icon = require('./icon.js');
var input = require('./input.js');
require('./chunk-f1df1c63.js');
var loading = require('./loading.js');
var menu = require('./menu.js');
require('./chunk-9fe5ff8e.js');
var message = require('./message.js');
var modal = require('./modal.js');
var notification = require('./notification.js');
require('./chunk-cf290ca9.js');
var navbar = require('./navbar.js');
var numberinput = require('./numberinput.js');
require('./chunk-a9f01e9e.js');
var pagination = require('./pagination.js');
var progress = require('./progress.js');
var radio = require('./radio.js');
var rate = require('./rate.js');
var select = require('./select.js');
var skeleton = require('./skeleton.js');
var sidebar = require('./sidebar.js');
require('./chunk-5bc47591.js');
var slider = require('./slider.js');
var snackbar = require('./snackbar.js');
require('./chunk-3dffe6e7.js');
var steps = require('./steps.js');
var _switch = require('./switch.js');
var table = require('./table.js');
var tabs = require('./tabs.js');
require('./chunk-21708619.js');
var tag = require('./tag.js');
var taginput = require('./taginput.js');
var timepicker = require('./timepicker.js');
var toast = require('./toast.js');
var tooltip = require('./tooltip.js');
var upload = require('./upload.js');



var components = /*#__PURE__*/Object.freeze({
    Autocomplete: autocomplete.default,
    Button: button.default,
    Carousel: carousel.default,
    Checkbox: checkbox.default,
    Clockpicker: clockpicker.default,
    Collapse: collapse.default,
    Datepicker: datepicker.default,
    Datetimepicker: datetimepicker.default,
    Dialog: dialog.default,
    Dropdown: dropdown.default,
    Field: field.default,
    Icon: icon.default,
    Input: input.default,
    Loading: loading.default,
    Menu: menu.default,
    Message: message.default,
    Modal: modal.default,
    Navbar: navbar.default,
    Notification: notification.default,
    Numberinput: numberinput.default,
    Pagination: pagination.default,
    Progress: progress.default,
    Radio: radio.default,
    Rate: rate.default,
    Select: select.default,
    Skeleton: skeleton.default,
    Sidebar: sidebar.default,
    Slider: slider.default,
    Snackbar: snackbar.default,
    Steps: steps.default,
    Switch: _switch.default,
    Table: table.default,
    Tabs: tabs.default,
    Tag: tag.default,
    Taginput: taginput.default,
    Timepicker: timepicker.default,
    Toast: toast.default,
    Tooltip: tooltip.default,
    Upload: upload.default
});

var ConfigComponent = {
  getOptions: function getOptions() {
    return __chunk_2.config;
  },
  setOptions: function setOptions(options) {
    __chunk_2.setOptions(helpers.merge(__chunk_2.config, options, true));
  }
};

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    __chunk_2.setVueInstance(Vue); // Options

    __chunk_2.setOptions(helpers.merge(__chunk_2.config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    __chunk_5.registerComponentProgrammatic(Vue, 'config', ConfigComponent);
  }
};
__chunk_5.use(Buefy);

exports.createAbsoluteElement = helpers.createAbsoluteElement;
exports.createNewEvent = helpers.createNewEvent;
exports.escapeRegExpChars = helpers.escapeRegExpChars;
exports.getValueByPath = helpers.getValueByPath;
exports.indexOf = helpers.indexOf;
exports.isMobile = helpers.isMobile;
exports.merge = helpers.merge;
exports.multiColumnSort = helpers.multiColumnSort;
exports.removeElement = helpers.removeElement;
exports.sign = helpers.sign;
exports.Autocomplete = autocomplete.default;
exports.Button = button.default;
exports.Carousel = carousel.default;
exports.Checkbox = checkbox.default;
exports.Collapse = collapse.default;
exports.Clockpicker = clockpicker.default;
exports.Datepicker = datepicker.default;
exports.Datetimepicker = datetimepicker.default;
exports.Dialog = dialog.default;
exports.DialogProgrammatic = dialog.DialogProgrammatic;
exports.Dropdown = dropdown.default;
exports.Field = field.default;
exports.Icon = icon.default;
exports.Input = input.default;
exports.Loading = loading.default;
exports.LoadingProgrammatic = loading.LoadingProgrammatic;
exports.Menu = menu.default;
exports.Message = message.default;
exports.Modal = modal.default;
exports.ModalProgrammatic = modal.ModalProgrammatic;
exports.Notification = notification.default;
exports.NotificationProgrammatic = notification.NotificationProgrammatic;
exports.Navbar = navbar.default;
exports.Numberinput = numberinput.default;
exports.Pagination = pagination.default;
exports.Progress = progress.default;
exports.Radio = radio.default;
exports.Rate = rate.default;
exports.Select = select.default;
exports.Skeleton = skeleton.default;
exports.Sidebar = sidebar.default;
exports.Slider = slider.default;
exports.Snackbar = snackbar.default;
exports.SnackbarProgrammatic = snackbar.SnackbarProgrammatic;
exports.Steps = steps.default;
exports.Switch = _switch.default;
exports.Table = table.default;
exports.Tabs = tabs.default;
exports.Tag = tag.default;
exports.Taginput = taginput.default;
exports.Timepicker = timepicker.default;
exports.Toast = toast.default;
exports.ToastProgrammatic = toast.ToastProgrammatic;
exports.Tooltip = tooltip.default;
exports.Upload = upload.default;
exports.ConfigProgrammatic = ConfigComponent;
exports.default = Buefy;
