var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    (function (Adapters) {
        ///<reference path="../../Typings/Three.d.ts"/>
        ///<reference path="../../Core/AdapterInterfaces.ts"/>
        (function (ThreeAdapter) {
            var Core = App.Core;

            var WebGlRenderer = (function () {
                function WebGlRenderer() {
                    this._renderer = new THREE.WebGLRenderer();
                }
                Object.defineProperty(WebGlRenderer.prototype, "size", {
                    set: function (size) {
                        this._renderer.setSize(size.width, size.height);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(WebGlRenderer.prototype, "domElement", {
                    get: function () {
                        return this._renderer.domElement;
                    },
                    enumerable: true,
                    configurable: true
                });

                WebGlRenderer.prototype.render = function (scene, camera) {
                    this._renderer.render(scene.raw, camera.raw);
                };

                WebGlRenderer.createInstance = function () {
                    return new WebGlRenderer();
                };
                return WebGlRenderer;
            })();
            ThreeAdapter.WebGlRenderer = WebGlRenderer;

            var Vector3D = (function () {
                function Vector3D(vector) {
                    if (Core.DefinedAndNotNull(vector)) {
                        this.vector = vector;
                    } else {
                        this.vector = new THREE.Vector3();
                    }
                }
                Object.defineProperty(Vector3D.prototype, "raw", {
                    get: function () {
                        return this.vector;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(Vector3D.prototype, "x", {
                    get: function () {
                        return this.vector.x;
                    },
                    set: function (value) {
                        this.vector.x = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Vector3D.prototype, "y", {
                    get: function () {
                        return this.vector.y;
                    },
                    set: function (value) {
                        this.vector.y = value;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Vector3D.prototype, "z", {
                    get: function () {
                        return this.vector.z;
                    },
                    set: function (value) {
                        this.vector.z = value;
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

            var Point3D = (function (_super) {
                __extends(Point3D, _super);
                function Point3D(vector) {
                    _super.call(this, vector);
                }
                Point3D.createInstance = function (x, y, z) {
                    return new Point3D(new THREE.Vector3(x, y, z));
                };
                return Point3D;
            })(Vector3D);
            ThreeAdapter.Point3D = Point3D;

            var Rotation3D = (function (_super) {
                __extends(Rotation3D, _super);
                function Rotation3D(vector) {
                    _super.call(this, vector);
                }
                Rotation3D.createInstance = function (x, y, z) {
                    return new Rotation3D(new THREE.Vector3(x, y, z));
                };
                return Rotation3D;
            })(Vector3D);
            ThreeAdapter.Rotation3D = Rotation3D;

            var Scale3D = (function (_super) {
                __extends(Scale3D, _super);
                function Scale3D(vector) {
                    _super.call(this, vector);
                }
                Scale3D.createInstance = function (x, y, z) {
                    return new Scale3D(new THREE.Vector3(x, y, z));
                };
                return Scale3D;
            })(Vector3D);
            ThreeAdapter.Scale3D = Scale3D;

            var Object3D = (function () {
                function Object3D(object) {
                    this._object = object;
                }
                Object.defineProperty(Object3D.prototype, "raw", {
                    get: /* Properties */
                    function () {
                        return this._object;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(Object3D.prototype, "position", {
                    get: function () {
                        return new Point3D(this._object.position);
                    },
                    set: function (position) {
                        this._object.position = position.raw;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Object3D.prototype, "rotation", {
                    get: function () {
                        return new Rotation3D(this._object.rotation);
                    },
                    set: function (rotation) {
                        this._object.rotation = rotation.raw;
                    },
                    enumerable: true,
                    configurable: true
                });


                Object.defineProperty(Object3D.prototype, "scale", {
                    get: function () {
                        return new Scale3D(this._object.scale);
                    },
                    set: function (scale) {
                        this._object.scale = scale.raw;
                    },
                    enumerable: true,
                    configurable: true
                });


                /**/
                Object3D.prototype.add = function (child) {
                    this._object.add(child.raw);
                };

                Object3D.createInstance = function () {
                    return new Object3D(new THREE.Object3D());
                };
                return Object3D;
            })();
            ThreeAdapter.Object3D = Object3D;

            var Scene = (function (_super) {
                __extends(Scene, _super);
                function Scene() {
                    _super.apply(this, arguments);
                }
                Scene.createInstance = function () {
                    return new Scene(new THREE.Scene());
                };
                return Scene;
            })(Object3D);
            ThreeAdapter.Scene = Scene;

            var PerspectiveCamera = (function (_super) {
                __extends(PerspectiveCamera, _super);
                function PerspectiveCamera() {
                    _super.apply(this, arguments);
                }
                PerspectiveCamera.createInstance = function (fov, aspect, near, far) {
                    return new PerspectiveCamera(new THREE.PerspectiveCamera(fov, aspect, near, far));
                };
                return PerspectiveCamera;
            })(Object3D);
            ThreeAdapter.PerspectiveCamera = PerspectiveCamera;
        })(Adapters.ThreeAdapter || (Adapters.ThreeAdapter = {}));
        var ThreeAdapter = Adapters.ThreeAdapter;
    })(App.Adapters || (App.Adapters = {}));
    var Adapters = App.Adapters;
})(App || (App = {}));
//# sourceMappingURL=ThreeAdapter.js.map
