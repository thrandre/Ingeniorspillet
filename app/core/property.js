var App;
(function (App) {
    ///<reference path="utils.ts"/>
    (function (Core) {
        var Property = (function () {
            function Property() {
            }
            Property.prototype.initialize = function (defaultValue, onValueChanged) {
                var $this = this;
                return function innerProperty(value) {
                    if (Core.NotNullOrEmpty(value) && $this._backingField !== value) {
                        var oldValue = $this._backingField;
                        $this._backingField = value;
                        if (onValueChanged) {
                            onValueChanged(oldValue, $this._backingField);
                        }
                    }
                    return $this._backingField;
                };
            };
            return Property;
        })();
        Core.Property = Property;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=property.js.map
