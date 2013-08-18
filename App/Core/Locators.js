var App;
(function (App) {
    (function (Core) {
        var IIVector3D = (function () {
            function IIVector3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IVector3D";
            }
            return IIVector3D;
        })();
        Core.IIVector3D = IIVector3D;

        var IIPoint3D = (function () {
            function IIPoint3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IPoint3D";
            }
            return IIPoint3D;
        })();
        Core.IIPoint3D = IIPoint3D;

        var IIRotation3D = (function () {
            function IIRotation3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IRotation3D";
            }
            return IIRotation3D;
        })();
        Core.IIRotation3D = IIRotation3D;

        var IIScale3D = (function () {
            function IIScale3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IScale3D";
            }
            return IIScale3D;
        })();
        Core.IIScale3D = IIScale3D;

        var IIObject3D = (function () {
            function IIObject3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IObject3D";
            }
            return IIObject3D;
        })();
        Core.IIObject3D = IIObject3D;

        var IIRenderer = (function () {
            function IIRenderer(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IRenderer";
            }
            return IIRenderer;
        })();
        Core.IIRenderer = IIRenderer;

        var IIScene = (function () {
            function IIScene(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IScene";
            }
            return IIScene;
        })();
        Core.IIScene = IIScene;

        var IICamera = (function () {
            function IICamera(classReference) {
                this.classReference = classReference;
                this.interfaceName = "ICamera";
            }
            return IICamera;
        })();
        Core.IICamera = IICamera;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=Locators.js.map
