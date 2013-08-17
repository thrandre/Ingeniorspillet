var App;
(function (App) {
    ///<reference path="Utils.ts"/>
    ///<reference path="AdapterInterfaces.ts"/>
    (function (Core) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.register = function (iInterface) {
                Factory.directory[iInterface.interfaceName] = iInterface.classReference;
            };

            Factory.create = function (iInterface, args) {
                var ref = Factory.directory[iInterface.interfaceName];

                if (!Core.DefinedAndNotNull(ref)) {
                    throw "IoC container not initialized.";
                }

                var arguments = null;
                if (Core.DefinedAndNotNull(args, "$.arguments")) {
                    arguments = args.arguments;
                }

                return ref.createInstance.apply(this, arguments);
            };
            Factory.directory = {};
            return Factory;
        })();
        Core.Factory = Factory;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=Factory.js.map
