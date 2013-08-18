///<reference path="Utils.ts"/>
///<reference path="Interfaces.ts"/>
///<reference path="Locators.ts"/>

module App.Core {
	export class IoCContainer {
		static directory: {[key: string]: any} = {};
		
		static register<T>(iInterface: IInterface): ContainerInstantiator<T> {
			var ref = iInterface.classReference;
			Container.directory[iInterface.interfaceName] = ref;

			return new ContainerInstantiator(ref);
		}

		static resolve<T>(iInterface: IInterface): ContainerInstantiator<T>  {
			var ref = Container.directory[iInterface.interfaceName];
			
			if (!DefinedAndNotNull(ref)) {
				throw "IoC container not initialized.";
			}

			return new ContainerInstantiator(ref);
		}
	}

	export class ContainerInstantiator<T> {
		private _container: any;

		constructor(container: any) {
			this._container = container;
		}

		public create(...params: any[]): T {
			if (!DefinedAndNotNull(this._container, "$.createInstance")) {
				throw "The container does not implement a static createInstance method. Unable to create instance.";
			}

			return <T> this._container.createInstance.apply(this, params);
		}
	}
}