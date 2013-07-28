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
var App;
(function (App) {
    (function (Core) {
        var ObservableEvent = (function () {
            function ObservableEvent(name) {
                this.name = name;
            }
            return ObservableEvent;
        })();
        Core.ObservableEvent = ObservableEvent;

        var ObserverSubscription = (function () {
            function ObserverSubscription(observer, event) {
                this.observer = observer;
                this.event = event;
            }
            return ObserverSubscription;
        })();

        var Observable = (function () {
            function Observable() {
                this._observers = new Array();
            }
            Observable.prototype.notify = function (observer, event) {
                this._observers.push(new ObserverSubscription(observer, event));
            };

            Observable.prototype.on = function (event) {
                this._observers.forEach(function (observerSubscription) {
                    return observerSubscription.observer.observe(event, null);
                });
            };
            return Observable;
        })();
        Core.Observable = Observable;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    (function (Core) {
        var Property = (function () {
            function Property() {
            }
            Property.prototype.initialize = function (defaultValue, onValueChanged) {
                var $this = this;
                return function innerProperty(value) {
                    if (Core.NotNullOrEmpty(value) && $this._backingField !== value) {
                        var oldValue = $this._backingField;
                        $this._backingField = value;
                        if (onValueChanged) {
                            onValueChanged(oldValue, $this._backingField);
                        }
                    }
                    return $this._backingField;
                };
            };
            return Property;
        })();
        Core.Property = Property;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    (function (Core) {
        function when() {
            var promises = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                promises[_i] = arguments[_i + 0];
            }
            var allDone = new Deferred();
            var results = [];
            var remaining = promises.length;

            promises.map(function (p, i) {
                p.then(function () {
                    var args = [];
                    for (var _i = 0; _i < (arguments.length - 0); _i++) {
                        args[_i] = arguments[_i + 0];
                    }
                    results[i] = args;
                    remaining--;
                    if (!remaining && allDone.status() !== "rejected") {
                        allDone.resolve.apply(allDone, results);
                    }
                }, function () {
                    allDone.reject();
                });
            });

            if (!remaining) {
                allDone.resolve.apply(allDone, results);
            }

            return allDone.promise();
        }
        Core.when = when;

        var Promise = (function () {
            function Promise(deferred) {
                this.deferred = deferred;
            }
            Promise.prototype.then = function (callback, error) {
                return this.deferred.then(callback, error);
            };

            Promise.prototype.status = function () {
                return this.deferred.status();
            };
            Promise.prototype.result = function () {
                return this.deferred.result();
            };
            return Promise;
        })();
        Core.Promise = Promise;

        var Deferred = (function () {
            function Deferred() {
                this.resolved = [];
                this.rejected = [];
                this._promise = new Promise(this);
                this._status = "in progress";
            }
            Deferred.prototype.promise = function () {
                return this._promise;
            };
            Deferred.prototype.status = function () {
                return this._status;
            };
            Deferred.prototype.result = function () {
                return this._result;
            };

            Deferred.prototype.resolve = function () {
                var result = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    result[_i] = arguments[_i + 0];
                }
                this._result = result;
                this.notify(this.resolved, result);
                this.resolved = [];
                this._status = "resolved";
                return this;
            };

            Deferred.prototype.reject = function () {
                var result = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    result[_i] = arguments[_i + 0];
                }
                this._result = result;
                this.notify(this.rejected, result);
                this.rejected = [];
                this._status = "rejected";
                return this;
            };

            Deferred.prototype.then = function (callback, error) {
                var d = new Deferred();

                this.resolved.push(this.wrap(d, callback, "resolve"));
                this.rejected.push(this.wrap(d, error, "reject"));

                if (this._status === "resolved") {
                    this.resolve.apply(this, this.result);
                } else if (this._status === "rejected") {
                    this.reject.apply(this, this.result);
                }

                return d.promise();
            };

            Deferred.prototype.wrap = function (d, f, method) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < (arguments.length - 0); _i++) {
                        args[_i] = arguments[_i + 0];
                    }
                    var result = f.apply(f, args);
                    if (result && result instanceof Promise) {
                        result.then(function () {
                            d.resolve();
                        }, function () {
                            d.reject();
                        });
                    } else {
                        d[method].apply(d, typeof result === "array" ? result : [result]);
                    }
                };
            };

            Deferred.prototype.notify = function (funcs, result) {
                funcs.map(function (f) {
                    f.apply(f, result);
                });
            };
            return Deferred;
        })();
        Core.Deferred = Deferred;
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
var App;
(function (App) {
    (function (Core) {
        var Asset = (function () {
            function Asset() {
                this.loaded = new Core.Property().initialize(false);
                this.path = new Core.Property().initialize("");
                this.byteSize = new Core.Property().initialize(100);
            }
            return Asset;
        })();
        Core.Asset = Asset;

        var GameObject = (function (_super) {
            __extends(GameObject, _super);
            function GameObject(object) {
                _super.call(this);

                this.object = object;

                this.position = new Core.Property().initialize(null, this.onPositionChanged);

                this.rotation = new Core.Property().initialize(null, this.onRotationChanged);

                this.scale = new Core.Property().initialize(null, this.onScaleChanged);
            }
            GameObject.prototype.onPositionChanged = function (oldPosition, newPosition) {
                this.object.position = newPosition;
            };

            GameObject.prototype.onRotationChanged = function (oldRotation, newRotation) {
                this.object.rotation = newRotation;
            };

            GameObject.prototype.onScaleChanged = function (oldScale, newScale) {
                this.object.scale = newScale;
            };
            return GameObject;
        })(Core.Observable);
        Core.GameObject = GameObject;

        var LoadableGameObject = (function (_super) {
            __extends(LoadableGameObject, _super);
            function LoadableGameObject() {
                _super.call(this, null);
            }
            return LoadableGameObject;
        })(GameObject);
        Core.LoadableGameObject = LoadableGameObject;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    (function (Controllers) {
        var Core = App.Core;

        var BoardController = (function (_super) {
            __extends(BoardController, _super);
            function BoardController() {
                _super.apply(this, arguments);
            }
            BoardController.prototype.die = function () {
                this.on(BoardController.Events.Die);
            };
            BoardController.Events = {
                Die: new Core.ObservableEvent("BoardController.Die")
            };
            return BoardController;
        })(Core.Observable);
        Controllers.BoardController = BoardController;
    })(App.Controllers || (App.Controllers = {}));
    var Controllers = App.Controllers;
})(App || (App = {}));
var Core = App.Core;
var Controllers = App.Controllers;

window.onload = function () {
    var g = new Core.LoadableGameObject();
};
