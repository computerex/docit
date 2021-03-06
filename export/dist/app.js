'use strict';

System.register([], function (_export, _context) {
  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'docit';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }, { route: ['docsearch', 'documents'], name: 'docsearch', moduleId: 'docsearch', nav: true, title: 'Document Search' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxQkFBYTs7Ozs7c0JBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsT0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sQ0FBQyxFQUFELEVBQUssU0FBTCxDQUFQLEVBQXdCLE1BQU0sU0FBTixFQUFzQixVQUFVLFNBQVYsRUFBMEIsS0FBSyxJQUFMLEVBQVcsT0FBTyxTQUFQLEVBRDVFLEVBRVQsRUFBRSxPQUFPLE9BQVAsRUFBd0IsTUFBTSxPQUFOLEVBQXNCLFVBQVUsT0FBVixFQUEwQixLQUFLLElBQUwsRUFBVyxPQUFPLGNBQVAsRUFGNUUsRUFHVCxFQUFFLE9BQU8sY0FBUCxFQUF3QixNQUFNLGNBQU4sRUFBc0IsVUFBVSxjQUFWLEVBQTBCLEtBQUssSUFBTCxFQUFXLE9BQU8sY0FBUCxFQUg1RSxFQUlULEVBQUUsT0FBTyxDQUFDLFdBQUQsRUFBYyxXQUFkLENBQVAsRUFBbUMsTUFBTSxXQUFOLEVBQW1CLFVBQVUsV0FBVixFQUF1QixLQUFLLElBQUwsRUFBVyxPQUFPLGlCQUFQLEVBSmpGLENBQVgsRUFGOEI7O0FBUzlCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FUOEI7OztlQURyQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
