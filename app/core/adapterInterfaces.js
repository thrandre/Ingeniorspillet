var App;
(function (App) {
    (function (Core) {
        var IIPoint3DArgs = (function () {
            function IIPoint3DArgs(x, y, z) {
                this.arguments = arguments;
            }
            return IIPoint3DArgs;
        })();
        Core.IIPoint3DArgs = IIPoint3DArgs;

        var IIPoint3D = (function () {
            function IIPoint3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IIPoint3D";
            }
            return IIPoint3D;
        })();
        Core.IIPoint3D = IIPoint3D;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=adapterInterfaces.js.map
