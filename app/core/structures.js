﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    (function (Core) {
        var Point = (function (_super) {
            __extends(Point, _super);
            function Point() {
                _super.apply(this, arguments);
            }
            return Point;
        })(THREE.Vector3);
        Core.Point = Point;

        var Rotation = (function (_super) {
            __extends(Rotation, _super);
            function Rotation() {
                _super.apply(this, arguments);
            }
            return Rotation;
        })(THREE.Vector3);
        Core.Rotation = Rotation;

        var Scale = (function (_super) {
            __extends(Scale, _super);
            function Scale() {
                _super.apply(this, arguments);
            }
            return Scale;
        })(THREE.Vector3);
        Core.Scale = Scale;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=structures.js.map
