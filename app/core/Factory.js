var App;
(function (App) {
    (function (Core) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.register = function (iinterface) {
                Factory.directory[iinterface.interfaceName] = iinterface.classReference;
            };

            Factory.create = function (iinterface, args) {
                var ref = Factory.directory[iinterface.interfaceName];

                return ref.createInstance.apply(this, args.arguments);
            };
            Factory.directory = {};
            return Factory;
        })();
        Core.Factory = Factory;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=Factory.js.map
