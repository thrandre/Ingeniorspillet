///<reference path="utils.ts"/>

module App.Core {
	export class Property<T> {
		private _backingField: T;
		initialize(defaultValue?: T, onValueChanged?: (oldValue: T, newValue: T) => void): (value?: T) => T {
			var $this = this;
			return function innerProperty(value?: T): T {
				if (NotNullOrEmpty(value) && $this._backingField !== value) {
					var oldValue = $this._backingField;
					$this._backingField = value;
					if (onValueChanged) {
						onValueChanged(oldValue, $this._backingField);
					}
				}
				return $this._backingField;
			};
		}
	}
}