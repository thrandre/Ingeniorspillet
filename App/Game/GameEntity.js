var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="../Core/AdapterInterfaces.ts"/>
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
//# sourceMappingURL=GameEntity.js.map
