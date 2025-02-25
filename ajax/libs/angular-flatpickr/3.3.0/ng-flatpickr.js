(function (root, factory) {
  'use strict';
  root['angular-flatpickr'] = factory(root.angular, root.flatpickr);
}(this, function (angular, flatpickr) {

  'use strict';
  var ngFlatpickr = angular.module('angular-flatpickr', []);
  ngFlatpickr.directive('ngFlatpickr', [function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        fpOpts: '&',
        fpOnSetup: '&'
      },
      link: function (scope, element, attrs, ngModel) {

        var vp;
        if (!FlatpickrInstance || !flatpickr) {
          console.warn('Unable to find any flatpickr installation');
        }
        if (FlatpickrInstance) {
          vp = new FlatpickrInstance(element[0], scope.fpOpts());
        } else {
          vp = new flatpickr(element[0], scope.fpOpts());
        }


        if (scope.fpOnSetup) {
          scope.fpOnSetup({
            fpItem: vp
          });
        }

        // destroy the flatpickr instance when the dom element is removed
        element.on('$destroy', function () {
          vp.destroy();
        });
      }
    };
  }]);

  return ngFlatpickr;

}));
