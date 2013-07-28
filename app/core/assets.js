var App;
(function (App) {
    ///<reference path="property.ts"/>
    ///<reference path="utils.ts"/>
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
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=assets.js.map
