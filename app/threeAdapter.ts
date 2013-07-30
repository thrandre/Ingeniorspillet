///<reference path="typings/three.d.ts"/>
///<reference path="core/adapterInterfaces.ts"/>

module App.ThreeAdapter {
	import Core = App.Core;
	
	export class Point3D extends THREE.Vector3 implements Core.IPoint3D {
		static createInstance(x: number, y: number, z: number) {
			return new Point3D(x, y, z);
		}
	}

	export class Rotation3D extends THREE.Vector3 implements Core.IRotation3D {
	}

	export class Scale3D extends THREE.Vector3 implements Core.IScale3D {
	}
}