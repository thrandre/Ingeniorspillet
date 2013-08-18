///<reference path="../Core/Interfaces.ts"/>
///<reference path="GameEntityBase.ts"/>

module App.Game {
	import Core = App.Core;

	export interface IMoveable {
		position: Core.IPoint3D;
	}

	export interface IRotateable {
		rotation: Core.IRotation3D;
	}

	export interface IScaleable {
		scale: Core.IScale3D;
	}

	export class GameEntity extends GameEntityBase implements IMoveable, IRotateable, IScaleable {
		public get position(): Core.IPoint3D {
			return this.object.position;
		}

		public set position(position: Core.IPoint3D) {
			this.object.position = position;
		}

		public get rotation(): Core.IRotation3D {
			return this.object.rotation;
		}

		public set rotation(rotation: Core.IRotation3D) {
			this.object.rotation = rotation;
		}
		
		public get scale(): Core.IScale3D {
			return this.object.scale;
		}

		public set scale(scale: Core.IScale3D) {
			this.object.scale =scale;
		}		
	}
}