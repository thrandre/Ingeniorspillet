var App;
(function (App) {
    (function (Core) {
        function NotNullOrEmpty(val) {
            if (typeof val !== "undefined") {
                return true;
            }
            return false;
        }
        Core.NotNullOrEmpty = NotNullOrEmpty;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=utils.js.map
