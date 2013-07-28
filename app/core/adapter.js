var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="../typings/three.d.ts"/>
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

        var Object3D = (function (_super) {
            __extends(Object3D, _super);
            function Object3D() {
                _super.apply(this, arguments);
            }
            return Object3D;
        })(THREE.Object3D);
        Core.Object3D = Object3D;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=adapter.js.map
