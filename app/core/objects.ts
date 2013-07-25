///<reference path="observable.ts"/>
///<reference path="structures.ts"/>

module App.Core {
	export interface IMoveable {
		position(point?: Point): Point;
	}

	export interface IRotatable {
		rotation(rotatation?: Rotation): Rotation;
	}

	export interface IScaleable {
		scale(scale?: Scale): Scale;
	}

	export interface ILoadable {
		
	}

	export interface IAnimatable {
		
	}

	export interface IMapable {
	}

	export class GameEntity extends Observable implements ILoadable {
		constructor(public object: THREE.Object3D) {
			super();
		}
	}

	export class GameObject extends GameEntity implements IMoveable, IRotatable, IScaleable {
		position(point?: Point): Point {
			return null;
		}
		
		rotation(rotation?: Rotation): Rotation {
			return null;
		}
		
		scale(scale?: Scale): Scale {
			return null;
		}

		constructor(object: THREE.Object3D) {
			super(object);
		}
	}

	export class AnimatableObject extends GameObject {
		constructor(object: THREE.Object3D) {
			super(object);
		}
	}
}