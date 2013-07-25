///<reference path="utils.ts"/>

module App.Core {
	export class Property<T> {
		private _backingField: T;

		private innerProperty(value?: T): T {
			if (value) {
				this._backingField = value;
			}
			
			return <T>this._backingField;
		}

		init(val?: T) {
			if (NotNullOrEmpty(val)) {
				this._backingField = val;
			}

			return <(value?: T) => T>this.innerProperty;
		}
	}
}