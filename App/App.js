var App;
(function (App) {
    (function (Core) {
        function DefinedAndNotNullCheck(value, checkEmptyString) {
            return typeof value !== "undefined" && value !== null && (!checkEmptyString || value !== "");
        }

        function DefinedAndNotNull(root, pattern, checkEmptyString) {
            if (!DefinedAndNotNullCheck(root, checkEmptyString)) {
                return false;
            }

            if (!DefinedAndNotNullCheck(pattern, true)) {
                return DefinedAndNotNullCheck(root);
            }

            var segments = pattern.split(".");

            if (pattern.charAt(0) === "$" && segments.length === 1) {
                return DefinedAndNotNullCheck(root);
            }

            var parent = root;
            for (var i = 1; i < segments.length; i++) {
                var child = parent[segments[i]];
                if (DefinedAndNotNullCheck(child, checkEmptyString)) {
                    parent = child;
                } else {
                    return false;
                }
            }

            return true;
        }
        Core.DefinedAndNotNull = DefinedAndNotNull;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
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
var App;
(function (App) {
    (function (Core) {
        var IIVector3D = (function () {
            function IIVector3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IVector3D";
            }
            return IIVector3D;
        })();
        Core.IIVector3D = IIVector3D;

        var IIPoint3D = (function () {
            function IIPoint3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IPoint3D";
            }
            return IIPoint3D;
        })();
        Core.IIPoint3D = IIPoint3D;

        var IIRotation3D = (function () {
            function IIRotation3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IRotation3D";
            }
            return IIRotation3D;
        })();
        Core.IIRotation3D = IIRotation3D;

        var IIScale3D = (function () {
            function IIScale3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IScale3D";
            }
            return IIScale3D;
        })();
        Core.IIScale3D = IIScale3D;

        var IIObject3D = (function () {
            function IIObject3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IObject3D";
            }
            return IIObject3D;
        })();
        Core.IIObject3D = IIObject3D;

        var IIRenderer = (function () {
            function IIRenderer(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IRenderer";
            }
            return IIRenderer;
        })();
        Core.IIRenderer = IIRenderer;

        var IIScene = (function () {
            function IIScene(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IScene";
            }
            return IIScene;
        })();
        Core.IIScene = IIScene;

        var IICamera = (function () {
            function IICamera(classReference) {
                this.classReference = classReference;
                this.interfaceName = "ICamera";
            }
            return IICamera;
        })();
        Core.IICamera = IICamera;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    ///<reference path="Utils.ts"/>
    ///<reference path="Interfaces.ts"/>
    ///<reference path="Locators.ts"/>
    (function (Core) {
        var IoCContainer = (function () {
            function IoCContainer() {
            }
            IoCContainer.register = function (iInterface) {
                var ref = iInterface.classReference;
                Container.directory[iInterface.interfaceName] = ref;

                return new ContainerInstantiator(ref);
            };

            IoCContainer.resolve = function (iInterface) {
                var ref = Container.directory[iInterface.interfaceName];

                if (!Core.DefinedAndNotNull(ref)) {
                    throw "IoC container not initialized.";
                }

                return new ContainerInstantiator(ref);
            };
            IoCContainer.directory = {};
            return IoCContainer;
        })();
        Core.IoCContainer = IoCContainer;

        var ContainerInstantiator = (function () {
            function ContainerInstantiator(container) {
                this._container = container;
            }
            ContainerInstantiator.prototype.create = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                if (!Core.DefinedAndNotNull(this._container, "$.createInstance")) {
                    throw "The container does not implement a static createInstance method. Unable to create instance.";
                }

                return this._container.createInstance.apply(this, params);
            };
            return ContainerInstantiator;
        })();
        Core.ContainerInstantiator = ContainerInstantiator;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
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
        ///<reference path="../../Core/Interfaces.ts"/>
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
var App;
(function (App) {
    ///<reference path="../Core/Interfaces.ts"/>
    (function (Game) {
        var Core = App.Core;

        var GameEntityBase = (function () {
            function GameEntityBase(name) {
                this.name = name;
            }
            Object.defineProperty(GameEntityBase.prototype, "object", {
                get: function () {
                    if (!Core.DefinedAndNotNull(this._object)) {
                        throw "Object not initialized!";
                    }

                    return this._object;
                },
                set: function (object) {
                    this._object = object;
                },
                enumerable: true,
                configurable: true
            });


            GameEntityBase.prototype.addChildObject = function (child) {
                this.object.add(child);
            };
            return GameEntityBase;
        })();
        Game.GameEntityBase = GameEntityBase;
    })(App.Game || (App.Game = {}));
    var Game = App.Game;
})(App || (App = {}));
var App;
(function (App) {
    ///<reference path="../Core/Interfaces.ts"/>
    ///<reference path="GameEntityBase.ts"/>
    (function (Game) {
        var Core = App.Core;

        var GameEntity = (function (_super) {
            __extends(GameEntity, _super);
            function GameEntity() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(GameEntity.prototype, "position", {
                get: function () {
                    return this.object.position;
                },
                set: function (position) {
                    this.object.position = position;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(GameEntity.prototype, "rotation", {
                get: function () {
                    return this.object.rotation;
                },
                set: function (rotation) {
                    this.object.rotation = rotation;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(GameEntity.prototype, "scale", {
                get: function () {
                    return this.object.scale;
                },
                set: function (scale) {
                    this.object.scale = scale;
                },
                enumerable: true,
                configurable: true
            });

            return GameEntity;
        })(Game.GameEntityBase);
        Game.GameEntity = GameEntity;
    })(App.Game || (App.Game = {}));
    var Game = App.Game;
})(App || (App = {}));
///<reference path="Typings/JQuery.d.ts"/>
///<reference path="Core/IoCContainer.ts"/>
///<reference path="Adapters/Three/ThreeAdapter.ts"/>
///<reference path="Game/GameEntity.ts"/>
var Core = App.Core;
var Container = App.Core.IoCContainer;
var ThreeAdapter = App.Adapters.ThreeAdapter;
var Game = App.Game;

function bootstrapAdapter() {
    Container.register(new Core.IIRenderer(ThreeAdapter.WebGlRenderer));

    Container.register(new Core.IICamera(ThreeAdapter.PerspectiveCamera));

    Container.register(new Core.IIScene(ThreeAdapter.Scene));

    Container.register(new Core.IIVector3D(ThreeAdapter.Vector3D));

    Container.register(new Core.IIPoint3D(ThreeAdapter.Point3D));

    Container.register(new Core.IIRotation3D(ThreeAdapter.Rotation3D));

    Container.register(new Core.IIScale3D(ThreeAdapter.Scale3D));

    Container.register(new Core.IIObject3D(ThreeAdapter.Object3D));
}

$(function () {
    bootstrapAdapter();
    var camera = Container.resolve(new Core.IICamera()).create(35, 1920 / 1080, 0, 1000);
    var renderer = Container.resolve(new Core.IIRenderer()).create();
    console.log(camera);
});
