var App;
(function (App) {
    ///<reference path="../Core/AdapterInterfaces.ts"/>
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
//# sourceMappingURL=GameEntityBase.js.map
