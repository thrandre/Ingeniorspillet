var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    (function (Game) {
        var Core = App.Core;

        var Scene = (function (_super) {
            __extends(Scene, _super);
            function Scene() {
                _super.call(this, "Scene");
            }
            return Scene;
        })(Game.GameEntityBase);
        Game.Scene = Scene;
    })(App.Game || (App.Game = {}));
    var Game = App.Game;
})(App || (App = {}));
//# sourceMappingURL=Scene.js.map
