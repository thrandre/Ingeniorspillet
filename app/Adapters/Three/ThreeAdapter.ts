///<reference path="../../Typings/Three.d.ts"/>
///<reference path="../../Core/AdapterInterfaces.ts"/>

module App.Adapters.ThreeAdapter {
	import Core = App.Core;

	export class Vector3D implements Core.IVector3D {
		private _vector: THREE.Vector3;

		get x(): number {
			return this._vector.x;
		}

		set x(value: number) {
			this._vector.x = value;
		}

		get y(): number {
			return this._vector.y;
		}

		set y(value: number) {
			this._vector.y = value;
		}

		get z(): number {
			return this._vector.z;
		}

		set z(value: number) {
			this._vector.z = value;
		}

		constructor(vector?: THREE.Vector3) {
			if (Core.DefinedAndNotNull(vector)) {
				this._vector = vector;
			}
			else {
				this._vector = new THREE.Vector3();
			}
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Vector3D(
				new THREE.Vector3(x, y, z));
		}
	}

	export class Point3D implements Core.IPoint3D {
		private _vector: Core.IVector3D;

		get positionVector(): Core.IVector3D {
			return this._vector;
		}

		set positionVector(value: Core.IVector3D) {
			this._vector = value;
		}

		constructor(vector: Core.IVector3D) {
			this._vector = vector;
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Point3D(
				Vector3D.createInstance(x, y, z));
		}
	}

	export class Rotation3D implements Core.IRotation3D {
		private _vector: Core.IVector3D;

		get rotationVector(): Core.IVector3D {
			return this._vector;
		}

		set rotationVector(value: Core.IVector3D) {
			this._vector = value;
		}

		constructor(vector: Core.IVector3D) {
			this._vector = vector;
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Rotation3D(
				Vector3D.createInstance(x, y, z));
		}
	}

	export class Scale3D implements Core.IScale3D {
		private _vector: Core.IVector3D;

		get scaleVector(): Core.IVector3D {
			return this._vector;
		}

		set scaleVector(value: Core.IVector3D) {
			this._vector = value;
		}

		constructor(vector: Core.IVector3D) {
			this._vector = vector;
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Scale3D(
				Vector3D.createInstance(x, y, z));
		}
	}
}