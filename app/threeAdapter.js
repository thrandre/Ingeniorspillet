var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="typings/three.d.ts"/>
    ///<reference path="core/adapterInterfaces.ts"/>
    (function (ThreeAdapter) {
        var Core = App.Core;

        var Point3D = (function (_super) {
            __extends(Point3D, _super);
            function Point3D() {
                _super.apply(this, arguments);
            }
            Point3D.createInstance = function (x, y, z) {
                return new Point3D(x, y, z);
            };
            return Point3D;
        })(THREE.Vector3);
        ThreeAdapter.Point3D = Point3D;

        var Rotation3D = (function (_super) {
            __extends(Rotation3D, _super);
            function Rotation3D() {
                _super.apply(this, arguments);
            }
            return Rotation3D;
        })(THREE.Vector3);
        ThreeAdapter.Rotation3D = Rotation3D;

        var Scale3D = (function (_super) {
            __extends(Scale3D, _super);
            function Scale3D() {
                _super.apply(this, arguments);
            }
            return Scale3D;
        })(THREE.Vector3);
        ThreeAdapter.Scale3D = Scale3D;
    })(App.ThreeAdapter || (App.ThreeAdapter = {}));
    var ThreeAdapter = App.ThreeAdapter;
})(App || (App = {}));
//@ sourceMappingURL=threeAdapter.js.map
