'use strict';

System.register([], function (_export, _context) {
  var _createClass, Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Welcome', Welcome = function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        Welcome.prototype.submit = function submit() {
          this.previousValue = this.fullName;
          alert('Welcome, ' + this.fullName + '!');
        };

        Welcome.prototype.canDeactivate = function canDeactivate() {
          if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
          }
        };

        _createClass(Welcome, [{
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      }());

      _export('Welcome', Welcome);

      _export('UpperValueConverter', UpperValueConverter = function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        UpperValueConverter.prototype.toView = function toView(value) {
          return value && value.toUpperCase();
        };

        return UpperValueConverter;
      }());

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRWE7Ozs7ZUFDWCxVQUFVO2VBQ1YsWUFBWTtlQUNaLFdBQVc7ZUFDWCxnQkFBZ0IsS0FBSyxRQUFMOzs7QUFKTCwwQkFlWCwyQkFBUztBQUNQLGVBQUssYUFBTCxHQUFxQixLQUFLLFFBQUwsQ0FEZDtBQUVQLDhCQUFrQixLQUFLLFFBQUwsTUFBbEIsRUFGTzs7O0FBZkUsMEJBb0JYLHlDQUFnQjtBQUNkLGNBQUksS0FBSyxRQUFMLEtBQWtCLEtBQUssYUFBTCxFQUFvQjtBQUN4QyxtQkFBTyxRQUFRLGlDQUFSLENBQVAsQ0FEd0M7V0FBMUM7OztxQkFyQlM7OzhCQVdJO0FBQ2IsbUJBQVUsS0FBSyxTQUFMLFNBQWtCLEtBQUssUUFBTCxDQURmOzs7O2VBWEo7Ozs7O3FDQTJCQTs7Ozs7c0NBQ1gseUJBQU8sT0FBTztBQUNaLGlCQUFPLFNBQVMsTUFBTSxXQUFOLEVBQVQsQ0FESzs7O2VBREgiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
