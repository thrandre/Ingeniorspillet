///<reference path="../../Typings/Three.d.ts"/>
///<reference path="../../Core/Interfaces.ts"/>

module App.Adapters.ThreeAdapter {
	import Core = App.Core;

	export class WebGlRenderer implements Core.IRenderer {
		private _renderer: THREE.WebGLRenderer;

		set size(size: Core.Rectangle) {
			this._renderer.setSize(size.width, size.height);
		}

		get domElement(): HTMLCanvasElement {
			return this._renderer.domElement;
		} 

		public render(scene: Core.IScene, camera: Core.ICamera) {
			this._renderer.render(scene.raw, camera.raw);
		}

		constructor() {
			this._renderer = new THREE.WebGLRenderer();
		}

		static createInstance() {
			return new WebGlRenderer();
		}
	}

	export class Vector3D implements Core.IVector3D {
		public vector: THREE.Vector3;

		get raw(): THREE.Vector3 {
			return this.vector;
		}

		get x(): number {
			return this.vector.x;
		}

		set x(value: number) {
			this.vector.x = value;
		}

		get y(): number {
			return this.vector.y;
		}

		set y(value: number) {
			this.vector.y = value;
		}

		get z(): number {
			return this.vector.z;
		}

		set z(value: number) {
			this.vector.z = value;
		}

		constructor(vector?: THREE.Vector3) {
			if (Core.DefinedAndNotNull(vector)) {
				this.vector = vector;
			}
			else {
				this.vector = new THREE.Vector3();
			}
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Vector3D(
				new THREE.Vector3(x, y, z));
		}
	}

	export class Point3D extends Vector3D implements Core.IPoint3D {
		constructor(vector: THREE.Vector3) {
			super(vector);
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Point3D(
				new THREE.Vector3(x, y, z)
			);
		}
	}

	export class Rotation3D extends Vector3D implements Core.IRotation3D {
		constructor(vector: THREE.Vector3) {
			super(vector);
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Rotation3D(
				new THREE.Vector3(x, y, z)
			);
		}
	}

	export class Scale3D extends Vector3D implements Core.IScale3D {
		constructor(vector: THREE.Vector3) {
			super(vector);
		}

		static createInstance(x?: number, y?: number, z?: number) {
			return new Scale3D(
				new THREE.Vector3(x, y, z)
			);
		}
	}

	export class Object3D implements Core.IObject3D {
		private _object: THREE.Object3D;

		/* Properties */
		get raw(): THREE.Object3D {
			return this._object;
		}

		get position(): Core.IPoint3D {
			return new Point3D(this._object.position);
		}

		set position(position: Core.IPoint3D) {
			this._object.position = position.raw;
		}

		get rotation(): Core.IRotation3D {
			return new Rotation3D(this._object.rotation);
		}

		set rotation(rotation: Core.IRotation3D) {
			this._object.rotation = rotation.raw;
		}

		get scale(): Core.IScale3D {
			return new Scale3D(this._object.scale);
		}

		set scale(scale: Core.IScale3D) {
			this._object.scale = scale.raw;
		}
		/**/

		public add(child: Core.IObject3D) {
			this._object.add(child.raw);
		}

		constructor(object: THREE.Object3D) {
			this._object = object;
		}

		static createInstance() {
			return new Object3D(
				new THREE.Object3D());
		}
	}

	export class Scene extends Object3D implements Core.IScene {
		static createInstance() {
			return new Scene(
				new THREE.Scene());
		}
	}

	export class PerspectiveCamera extends Object3D implements Core.ICamera {
		static createInstance(fov?: number, aspect?: number, near?: number, far?: number) {
			return new PerspectiveCamera(
				new THREE.PerspectiveCamera(fov, aspect, near, far));
		}
	}
}