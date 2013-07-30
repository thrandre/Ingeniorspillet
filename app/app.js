var App;
(function (App) {
    (function (Core) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.register = function (iinterface) {
                Factory.directory[iinterface.interfaceName] = iinterface.classReference;
            };

            Factory.create = function (iinterface, args) {
                var ref = Factory.directory[iinterface.interfaceName];

                return ref.createInstance.apply(this, args.arguments);
            };
            Factory.directory = {};
            return Factory;
        })();
        Core.Factory = Factory;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    (function (Core) {
        var IIPoint3DArgs = (function () {
            function IIPoint3DArgs(x, y, z) {
                this.arguments = arguments;
            }
            return IIPoint3DArgs;
        })();
        Core.IIPoint3DArgs = IIPoint3DArgs;

        var IIPoint3D = (function () {
            function IIPoint3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IIPoint3D";
            }
            return IIPoint3D;
        })();
        Core.IIPoint3D = IIPoint3D;
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
var App;
(function (App) {
    (function (Core) {
        function NotNullOrEmpty(val) {
            return true;
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
        (function (Deferreds) {
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
            Deferreds.when = when;

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
            Deferreds.Promise = Promise;

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
            Deferreds.Deferred = Deferred;
        })(Core.Deferreds || (Core.Deferreds = {}));
        var Deferreds = Core.Deferreds;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
var App;
(function (App) {
    (function (Core) {
        var Asset = (function () {
            function Asset() {
                this._loaded = true;
            }
            Object.defineProperty(Asset.prototype, "loaded", {
                get: function () {
                    return this._loaded;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Asset.prototype, "path", {
                get: function () {
                    return this._path;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Asset.prototype, "bytesize", {
                get: function () {
                    return this._bytesize;
                },
                enumerable: true,
                configurable: true
            });
            return Asset;
        })();
        Core.Asset = Asset;
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
    Core.Factory.register(new Core.IIPoint3D(App.ThreeAdapter.Point3D));

    var test = Core.Factory.create(new Core.IIPoint3D(), new Core.IIPoint3DArgs(2, 4, 6));

    console.log(test);
};
