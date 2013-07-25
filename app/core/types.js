var App;
(function (App) {
    ///<reference path="utils.ts"/>
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
//@ sourceMappingURL=types.js.map
