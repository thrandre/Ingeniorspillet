var App;
(function (App) {
    ///<reference path="property.ts"/>
    ///<reference path="observable.ts"/>
    ///<reference path="adapterInterfaces.ts"/>
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
//@ sourceMappingURL=objects.js.map
