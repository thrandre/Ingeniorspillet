///<reference path="Core/Factory.ts"/>
///<reference path="Adapters/Three/ThreeAdapter.ts"/>
var Core = App.Core;
var ThreeAdapter = App.Adapters.ThreeAdapter;

function bootstrapAdapter() {
    Core.Factory.register(new Core.IIVector3D(ThreeAdapter.Vector3D));

    Core.Factory.register(new Core.IIPoint3D(ThreeAdapter.Point3D));

    Core.Factory.register(new Core.IIRotation3D(ThreeAdapter.Rotation3D));

    Core.Factory.register(new Core.IIScale3D(ThreeAdapter.Scale3D));
}

window.onload = function () {
    bootstrapAdapter();

    var t = Core.Factory.create(new Core.IIRotation3D(), new Core.IIRotation3DArgs(10, 10, 10));

    console.log(t.rotationVector);
};
//@ sourceMappingURL=App.js.map
