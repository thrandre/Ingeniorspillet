var App;
(function (App) {
    (function (Core) {
        var Rectangle = (function () {
            function Rectangle(width, height) {
                this.width = width;
                this.height = height;
            }
            return Rectangle;
        })();
        Core.Rectangle = Rectangle;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=Primitives.js.map
