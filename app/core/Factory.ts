module App.Core {
	export class Factory {
		static directory = {};
		
		static register(iinterface: IInterface): void {
			Factory.directory[iinterface.interfaceName] = iinterface.classReference;
		}

		static create<T>(iinterface: IInterface, args?: IIArgs): T {
			var ref = Factory
				.directory[iinterface.interfaceName];
			
			return <T>ref.createInstance.apply(this, args.arguments);
		}
	}
}