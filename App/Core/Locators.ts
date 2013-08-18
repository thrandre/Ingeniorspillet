module App.Core {
	export interface IInterface {
		interfaceName: string;
		classReference: Function;
	}

	export class IIVector3D implements IInterface {
		interfaceName: string = "IVector3D";
		constructor(public classReference?: Function) { }
	}

	export class IIPoint3D implements IInterface {
		interfaceName: string = "IPoint3D";
		constructor(public classReference?: Function) { }
	}

	export class IIRotation3D implements IInterface {
		interfaceName: string = "IRotation3D";
		constructor(public classReference?: Function) { }
	}

	export class IIScale3D implements IInterface {
		interfaceName: string = "IScale3D";
		constructor(public classReference?: Function) { }
	}

	export class IIObject3D implements IInterface {
		interfaceName: string = "IObject3D";
		constructor(public classReference?: Function) { }
	}

	export class IIRenderer implements IInterface {
		interfaceName: string = "IRenderer";
		constructor(public classReference?: Function) { }
	}

	export class IIScene implements IInterface {
		interfaceName: string = "IScene";
		constructor(public classReference?: Function) { }
	}

	export class IICamera implements IInterface {
		interfaceName: string = "ICamera";
		constructor(public classReference?: Function) { }
	}
}