var App;
(function (App) {
    ///<reference path="Primitives.ts"/>
    (function (Core) {
        var IIRendererArgs = (function () {
            function IIRendererArgs() {
                this.arguments = arguments;
            }
            return IIRendererArgs;
        })();
        Core.IIRendererArgs = IIRendererArgs;

        var IIRenderer = (function () {
            function IIRenderer(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IRenderer";
            }
            return IIRenderer;
        })();
        Core.IIRenderer = IIRenderer;

        var IISceneArgs = (function () {
            function IISceneArgs() {
                this.arguments = arguments;
            }
            return IISceneArgs;
        })();
        Core.IISceneArgs = IISceneArgs;

        var IIScene = (function () {
            function IIScene(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IScene";
            }
            return IIScene;
        })();
        Core.IIScene = IIScene;

        var IICameraArgs = (function () {
            function IICameraArgs(fov, aspect, near, far) {
                this.arguments = arguments;
            }
            return IICameraArgs;
        })();
        Core.IICameraArgs = IICameraArgs;

        var IICamera = (function () {
            function IICamera(classReference) {
                this.classReference = classReference;
                this.interfaceName = "ICamera";
            }
            return IICamera;
        })();
        Core.IICamera = IICamera;

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
                this.interfaceName = "IVector3D";
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
                this.interfaceName = "IPoint3D";
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
                this.interfaceName = "IRotation3D";
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
                this.interfaceName = "IScale3D";
            }
            return IIScale3D;
        })();
        Core.IIScale3D = IIScale3D;

        var IIObject3DArgs = (function () {
            function IIObject3DArgs() {
            }
            return IIObject3DArgs;
        })();
        Core.IIObject3DArgs = IIObject3DArgs;

        var IIObject3D = (function () {
            function IIObject3D(classReference) {
                this.classReference = classReference;
                this.interfaceName = "IObject3D";
            }
            return IIObject3D;
        })();
        Core.IIObject3D = IIObject3D;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//# sourceMappingURL=AdapterInterfaces.js.map
