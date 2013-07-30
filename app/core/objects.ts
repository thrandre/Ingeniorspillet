///<reference path="property.ts"/>
///<reference path="observable.ts"/>
///<reference path="adapterInterfaces.ts"/>

module App.Core {
	export interface IMoveable {
		position: IPoint3D;
	}

	export interface IRotatable {
		rotation: IRotation3D;
	}

	export interface IScaleable {
		scale: IScale3D;
	}

	export interface ILoadable {
		load(): Deferreds.Promise;
	}

	export interface IAnimatable {
		
	}

	export interface IMapable {
	}

	export interface IAsset {
		loaded: boolean;
		path: string;
		bytesize: number;
	}

	export class Asset implements IAsset {
		private _loaded: boolean;
		public get loaded() {
			return this._loaded;
		}

		private _path: string;
		public get path() {
			return this._path;
		}

		private _bytesize: number;
		public get bytesize() {
			return this._bytesize;
		}

		constructor() {
			this._loaded = true;
		}
	}
}