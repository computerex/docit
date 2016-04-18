'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
  var inject, HttpClient, _dec, _class, DocSearch;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      _export('DocSearch', DocSearch = (_dec = inject(HttpClient), _dec(_class = function () {
        function DocSearch(http) {
          _classCallCheck(this, DocSearch);

          this.heading = 'Document Search';

          http.configure(function (config) {
            config.useStandardConfiguration();
          });
          this.http = http;
        }

        DocSearch.prototype.activate = function activate() {};

        return DocSearch;
      }()) || _class));

      _export('DocSearch', DocSearch);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7OzsyQkFJSyxvQkFEWixPQUFPLFVBQVA7QUFJQyxpQkFIVyxTQUdYLENBQVksSUFBWixFQUFrQjtnQ0FIUCxXQUdPOztlQUZsQixVQUFVLGtCQUVROztBQUNoQixlQUFLLFNBQUwsQ0FBZSxrQkFBVTtBQUN2QixtQkFBTyx3QkFBUCxHQUR1QjtXQUFWLENBQWYsQ0FEZ0I7QUFJaEIsZUFBSyxJQUFMLEdBQVksSUFBWixDQUpnQjtTQUFsQjs7QUFIVyw0QkFVWCwrQkFBVzs7ZUFWQSIsImZpbGUiOiJkb2NzZWFyY2guanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
