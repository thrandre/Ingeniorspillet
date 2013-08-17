///<reference path="../Core/AdapterInterfaces.ts"/>

module App.Game {
	import Core = App.Core;

	export class GameEntityBase {
		private _object: Core.IObject3D;

		get object(): Core.IObject3D {
			if (!Core.DefinedAndNotNull(this._object)) {
				throw "Object not initialized!";
			}

			return this._object;
		}

		set object(object: Core.IObject3D) {
			this._object = object;
		}

		public addChildObject(child: Core.IObject3D) {
			this.object.add(child);
		}

		constructor(public name: string) {}
	}
}