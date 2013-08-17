var App;
(function (App) {
    (function (Adapters) {
        ///<reference path="../../Typings/Three.d.ts"/>
        ///<reference path="../../Core/AdapterInterfaces.ts"/>
        (function (ThreeAdapter) {
            var Core = App.Core;

            var Vector3D = (function () {
                function Vector3D(vector) {
                    if (Core.DefinedAndNotNull(vector)) {
                        this._vector = vector;
                    } else {
                        this._vector = new THREE.Vector3();
                    }
                }
                Object.defineProperty(Vector3D.prototype, "x", {
                    get: function () {
                        return this._vector.x;
                    },
                    set: function (value) {
                        this._vector.x = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Vector3D.prototype, "y", {
                    get: function () {
                        return this._vector.y;
                    },
                    set: function (value) {
                        this._vector.y = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Vector3D.prototype, "z", {
                    get: function () {
                        return this._vector.z;
                    },
                    set: function (value) {
                        this._vector.z = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Vector3D.createInstance = function (x, y, z) {
                    return new Vector3D(new THREE.Vector3(x, y, z));
                };
                return Vector3D;
            })();
            ThreeAdapter.Vector3D = Vector3D;

            var Point3D = (function () {
                function Point3D(vector) {
                    this._vector = vector;
                }
                Object.defineProperty(Point3D.prototype, "positionVector", {
                    get: function () {
                        return this._vector;
                    },
                    set: function (value) {
                        this._vector = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Point3D.createInstance = function (x, y, z) {
                    return new Point3D(Vector3D.createInstance(x, y, z));
                };
                return Point3D;
            })();
            ThreeAdapter.Point3D = Point3D;

            var Rotation3D = (function () {
                function Rotation3D(vector) {
                    this._vector = vector;
                }
                Object.defineProperty(Rotation3D.prototype, "rotationVector", {
                    get: function () {
                        return this._vector;
                    },
                    set: function (value) {
                        this._vector = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Rotation3D.createInstance = function (x, y, z) {
                    return new Rotation3D(Vector3D.createInstance(x, y, z));
                };
                return Rotation3D;
            })();
            ThreeAdapter.Rotation3D = Rotation3D;

            var Scale3D = (function () {
                function Scale3D(vector) {
                    this._vector = vector;
                }
                Object.defineProperty(Scale3D.prototype, "scaleVector", {
                    get: function () {
                        return this._vector;
                    },
                    set: function (value) {
                        this._vector = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Scale3D.createInstance = function (x, y, z) {
                    return new Scale3D(Vector3D.createInstance(x, y, z));
                };
                return Scale3D;
            })();
            ThreeAdapter.Scale3D = Scale3D;

            var Object3D = (function () {
                function Object3D() {
                }
                return Object3D;
            })();
            ThreeAdapter.Object3D = Object3D;
        })(Adapters.ThreeAdapter || (Adapters.ThreeAdapter = {}));
        var ThreeAdapter = Adapters.ThreeAdapter;
    })(App.Adapters || (App.Adapters = {}));
    var Adapters = App.Adapters;
})(App || (App = {}));
//@ sourceMappingURL=ThreeAdapter.js.map
