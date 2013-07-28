var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    ///<reference path="property.ts"/>
    ///<reference path="observable.ts"/>
    ///<reference path="adapter.ts"/>
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
//@ sourceMappingURL=objects.js.map
