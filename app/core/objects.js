var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="observable.ts"/>
    ///<reference path="structures.ts"/>
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
//@ sourceMappingURL=objects.js.map
