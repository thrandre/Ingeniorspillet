///<reference path="Utils.ts"/>
///<reference path="AdapterInterfaces.ts"/>

module App.Core {
	export class Factory {
		static directory: {[key: string]: any} = {};
		
		static register(iInterface: IInterface): void {
			Factory.directory[iInterface.interfaceName] = iInterface.classReference;
		}

		static create<T>(iInterface: IInterface, args?: IIArgs): T {
			var ref = Factory.directory[iInterface.interfaceName];
			
			if (!DefinedAndNotNull(ref)) {
				throw "IoC container not initialized.";
			}

			var arguments = null;
			if (DefinedAndNotNull(args, "$.arguments")) {
				arguments = args.arguments;
			}
			
			return <T> ref.createInstance.apply(this, arguments);
		}
	}
}