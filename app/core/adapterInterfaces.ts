///<reference path="Primitives.ts"/>

module App.Core {
	export interface IIArgs {
		arguments: IArguments;
	}

	export interface IInterface {
		interfaceName: string;
		classReference: Function;
	}

	export interface IRenderer {
		size: Core.Rectangle;
		domElement: HTMLCanvasElement;
		render(scene: IScene, camera: ICamera);
	}

	export class IIRendererArgs implements IIArgs {
		arguments: IArguments;
		constructor() {
			this.arguments = arguments;
		}
	}

	export class IIRenderer implements IInterface {
		interfaceName: string = "IRenderer";
		constructor(public classReference?: Function) { }
	}

	export interface IScene extends IObject3D {	}

	export class IISceneArgs implements IIArgs {
		arguments: IArguments;
		constructor() {
			this.arguments = arguments;
		}
	}

	export class IIScene implements IInterface {
		interfaceName: string = "IScene";
		constructor(public classReference?: Function) { }
	}

	export interface ICamera extends IObject3D { }

	export class IICameraArgs implements IIArgs {
		arguments: IArguments;
		constructor(fov?: number, aspect?: number, near?: number, far?: number) {
			this.arguments = arguments;
		}
	}

	export class IICamera implements IInterface {
		interfaceName: string = "ICamera";
		constructor(public classReference?: Function) { }
	}

	export interface IVector3D {
		x: number;
		y: number;
		z: number;

		raw: any;

		createInstance(x: number, y: number, z: number);
	}

	export class IIVector3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIVector3D implements IInterface {
		interfaceName: string = "IVector3D";
		constructor(public classReference?: Function) { }
	}

	export interface IPoint3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export class IIPoint3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIPoint3D implements IInterface {
		interfaceName: string = "IPoint3D";
		constructor(public classReference?: Function) { }
	}

	export interface IRotation3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export class IIRotation3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIRotation3D implements IInterface {
		interfaceName: string = "IRotation3D";
		constructor(public classReference?: Function) { }
	}

	export interface IScale3D extends IVector3D {
		createInstance(x: number, y: number, z: number);
	}

	export class IIScale3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIScale3D implements IInterface {
		interfaceName: string = "IScale3D";
		constructor(public classReference?: Function) { }
	}

	export interface IObject3D {
		position: IPoint3D;
		rotation: IRotation3D;
		scale: IScale3D;

		add(child: IObject3D): void;
		raw: any;

		createInstance();
	}

	export class IIObject3DArgs implements IIArgs {
		arguments: IArguments;
	}

	export class IIObject3D implements IInterface {
		interfaceName: string = "IObject3D";
		constructor(public classReference?: Function) { }
	}
}