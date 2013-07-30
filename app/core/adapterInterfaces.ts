module App.Core {
	export interface IIArgs {
		arguments: IArguments;
	}

	export interface IInterface {
		interfaceName: string;
		classReference: Function;
	}

	export interface IPoint3D {
		x: number;
		y: number;
		z: number;

		createInstance(x: number, y: number, z: number);
	}

	export class IIPoint3DArgs implements IIArgs {
		arguments: IArguments;
		constructor(x: number, y: number, z: number) {
			this.arguments = arguments;
		}
	}

	export class IIPoint3D implements IInterface {
		interfaceName: string = "IIPoint3D";
		constructor(public classReference?: Function) { }
	}

	export interface IRotation3D {
		x: number;
		y: number;
		z: number;
	}

	export interface IScale3D {
		x: number;
		y: number;
		z: number;
	}
}