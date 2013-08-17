var App;
(function (App) {
    (function (Core) {
        var IIVector3DArgs = (function () {
            function IIVector3DArgs(x, y, z) {
                this.arguments = arguments;
            }
            return IIVector3DArgs;
        })();
        Core.IIVector3DArgs = IIVector3DArgs;

        var IIVector3D = (function () {
            function IIVector3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IIVector3D";
            }
            return IIVector3D;
        })();
        Core.IIVector3D = IIVector3D;

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

        var IIRotation3DArgs = (function () {
            function IIRotation3DArgs(x, y, z) {
                this.arguments = arguments;
            }
            return IIRotation3DArgs;
        })();
        Core.IIRotation3DArgs = IIRotation3DArgs;

        var IIRotation3D = (function () {
            function IIRotation3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IIRotation3D";
            }
            return IIRotation3D;
        })();
        Core.IIRotation3D = IIRotation3D;

        var IIScale3DArgs = (function () {
            function IIScale3DArgs(x, y, z) {
                this.arguments = arguments;
            }
            return IIScale3DArgs;
        })();
        Core.IIScale3DArgs = IIScale3DArgs;

        var IIScale3D = (function () {
            function IIScale3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IIScale3D";
            }
            return IIScale3D;
        })();
        Core.IIScale3D = IIScale3D;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=AdapterInterfaces.js.map
