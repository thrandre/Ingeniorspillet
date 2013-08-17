module App.Core {
	export interface IIArgs {
		arguments: IArguments;
	}

	export interface IInterface {
		interfaceName: string;
		classReference: Function;
	}

	export interface IVector3D {
		x: number;
		y: number;
		z: number;

		createInstance(x: number, y: number, z: number);
	}

	export class IIVector3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIVector3D implements IInterface {
		interfaceName: string = "IIVector3D";
		constructor(public classReference?: Function) { }
	}

	export interface IPoint3D {
		positionVector: IVector3D;
		createInstance(x: number, y: number, z: number);
	}

	export class IIPoint3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIPoint3D implements IInterface {
		interfaceName: string = "IIPoint3D";
		constructor(public classReference?: Function) { }
	}

	export interface IRotation3D {
		rotationVector: IVector3D;
		createInstance(x: number, y: number, z: number);
	}

	export class IIRotation3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIRotation3D implements IInterface {
		interfaceName: string = "IIRotation3D";
		constructor(public classReference?: Function) { }
	}

	export interface IScale3D {
		scaleVector: IVector3D;
		createInstance(x: number, y: number, z: number);
	}

	export class IIScale3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x?: number, y?: number, z?: number) {
			this.arguments = arguments;
		}
	}

	export class IIScale3D implements IInterface {
		interfaceName: string = "IIScale3D";
		constructor(public classReference?: Function) { }
	}
}