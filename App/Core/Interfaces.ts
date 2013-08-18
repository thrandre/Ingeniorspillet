///<reference path="Primitives.ts"/>

module App.Core {
	export interface IVector3D {
		x: number;
		y: number;
		z: number;

		raw: any;

		createInstance(x: number, y: number, z: number);
	}

	export interface IPoint3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export interface IRotation3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export interface IScale3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export interface IObject3D {
		position: IPoint3D;
		rotation: IRotation3D;
		scale: IScale3D;

		add(child: IObject3D): void;
		raw: any;

		createInstance();
	}

	export interface IRenderer {
		size: Core.Rectangle;
		domElement: HTMLCanvasElement;
		render(scene: IScene, camera: ICamera);

		createInstance();
	}

	export interface IScene extends IObject3D {	}

	export interface ICamera extends IObject3D { }
}