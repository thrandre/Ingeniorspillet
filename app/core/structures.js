var App;
(function (App) {
    (function (Core) {
        var Point = (function () {
            function Point(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
            }
            return Point;
        })();
        Core.Point = Point;

        var Rotation = (function () {
            function Rotation(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
            }
            return Rotation;
        })();
        Core.Rotation = Rotation;

        var Scale = (function () {
            function Scale(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
            }
            return Scale;
        })();
        Core.Scale = Scale;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=structures.js.map
