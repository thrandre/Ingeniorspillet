var App;
(function (App) {
    ///<reference path="Utils.ts"/>
    ///<reference path="AdapterInterfaces.ts"/>
    (function (Core) {
        var Container = (function () {
            function Container() {
            }
            Container.register = function (iInterface) {
                Container.directory[iInterface.interfaceName] = iInterface.classReference;
            };

            Container.create = function (iInterface, args) {
                var ref = Container.directory[iInterface.interfaceName];

                if (!DefinedAndNotNull(ref)) {
                    throw "IoC container not initialized.";
                }

                var arguments = null;
                if (DefinedAndNotNull(args, "$.arguments")) {
                    arguments = args.arguments;
                }

                return ref.createInstance.apply(this, arguments);
            };
            Container.directory = {};
            return Container;
        })();
        Core.Container = Container;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=Container.js.map
