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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    (function (Core) {
        var GameEntity = (function (_super) {
            __extends(GameEntity, _super);
            function GameEntity() {
                _super.apply(this, arguments);
            }
            return GameEntity;
        })(Core.Observable);
        Core.GameEntity = GameEntity;

        var GameObject = (function (_super) {
            __extends(GameObject, _super);
            function GameObject() {
                _super.apply(this, arguments);
            }
            GameObject.prototype.position = function (point) {
                return null;
            };

            GameObject.prototype.rotation = function (rotation) {
                return null;
            };

            GameObject.prototype.scale = function (scale) {
                return null;
            };
            return GameObject;
        })(GameEntity);
        Core.GameObject = GameObject;

        var AnimatableObject = (function (_super) {
            __extends(AnimatableObject, _super);
            function AnimatableObject() {
                _super.apply(this, arguments);
            }
            return AnimatableObject;
        })(GameObject);
        Core.AnimatableObject = AnimatableObject;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
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
        var Property = (function () {
            function Property() {
            }
            Property.prototype.innerProperty = function (value) {
                if (value) {
                    this._backingField = value;
                }

                return this._backingField;
            };

            Property.prototype.init = function (val) {
                if (Core.NotNullOrEmpty(val)) {
                    this._backingField = val;
                }

                return this.innerProperty;
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
        var Asset = (function () {
            function Asset() {
                this.loaded = new Core.Property().init(false);
                this.path = new Core.Property().init("/root/path");
                this.byteSize = new Core.Property().init(100);
            }
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
    var a = new Core.Asset();
    a.path("madderfakker");

    console.log(a.path());
};
