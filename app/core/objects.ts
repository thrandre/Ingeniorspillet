///<reference path="property.ts"/>
///<reference path="observable.ts"/>
///<reference path="adapter.ts"/>

module App.Core {
	export interface IMoveable {
		position: (point?: Point) => Point;
	}

	export interface IRotatable {
		rotation: (rotatation?: Rotation) => Rotation;
	}

	export interface IScaleable {
		scale: (scale?: Scale) => Scale;
	}

	export interface ILoadable {
		load(): Promise;
	}

	export interface IAnimatable {
		
	}

	export interface IMapable {
	}

	export class Asset {
		loaded: (value?: boolean) => boolean;
		path: (value?: string) => string;
		byteSize: (value?: number) => number;

		constructor() {
			this.loaded = new Property<boolean>().initialize(false);
			this.path = new Property<string>().initialize("");
			this.byteSize = new Property<number>().initialize(100);
		}
	}

	export class GameObject extends Observable implements IMoveable, IRotatable, IScaleable {
		object: Object3D;

		position: (point?: Point) => Point;
		rotation: (rotation?: Rotation) => Rotation;
		scale: (scale?: Scale) => Scale;

		private onPositionChanged(oldPosition: Point, newPosition: Point) {
			this.object.position = newPosition;
		}

		private onRotationChanged(oldRotation: Rotation, newRotation: Rotation) {
			this.object.rotation = newRotation;
		}

		private onScaleChanged(oldScale: Scale, newScale: Scale) {
			this.object.scale = newScale;
		}

		constructor(object: Object3D) {
			super();
			
			this.object = object;
			
			this.position = new Property<Point>()
				.initialize(null, this.onPositionChanged);
			
			this.rotation = new Property<Rotation>()
				.initialize(null, this.onRotationChanged);
			
			this.scale = new Property<Scale>()
				.initialize(null, this.onScaleChanged);
		}
	}

	export class LoadableGameObject extends GameObject implements ILoadable {
		constructor() {
			super(null);
		}
	}
}