var App;
(function (App) {
    ///<reference path="types.ts"/>
    ///<reference path="utils.ts"/>
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
//@ sourceMappingURL=assets.js.map
