var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="../core/Observable.ts"/>
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
//@ sourceMappingURL=boardController.js.map
