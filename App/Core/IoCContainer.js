var App;
(function (App) {
    ///<reference path="Utils.ts"/>
    ///<reference path="Interfaces.ts"/>
    ///<reference path="Locators.ts"/>
    (function (Core) {
        var IoCContainer = (function () {
            function IoCContainer() {
            }
            IoCContainer.register = function (iInterface) {
                var ref = iInterface.classReference;
                Container.directory[iInterface.interfaceName] = ref;

                return new ContainerInstantiator(ref);
            };

            IoCContainer.resolve = function (iInterface) {
                var ref = Container.directory[iInterface.interfaceName];

                if (!Core.DefinedAndNotNull(ref)) {
                    throw "IoC container not initialized.";
                }

                return new ContainerInstantiator(ref);
            };
            IoCContainer.directory = {};
            return IoCContainer;
        })();
        Core.IoCContainer = IoCContainer;

        var ContainerInstantiator = (function () {
            function ContainerInstantiator(container) {
                this._container = container;
            }
            ContainerInstantiator.prototype.create = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                if (!Core.DefinedAndNotNull(this._container, "$.createInstance")) {
                    throw "The container does not implement a static createInstance method. Unable to create instance.";
                }

                return this._container.createInstance.apply(this, params);
            };
            return ContainerInstantiator;
        })();
        Core.ContainerInstantiator = ContainerInstantiator;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=IoCContainer.js.map
