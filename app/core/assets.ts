///<reference path="types.ts"/>
///<reference path="utils.ts"/>

module App.Core {
	export class Asset {
		loaded = new Property<boolean>()
			.init(false);
		
		path = new Property<string>()
			.init("/root/path");
		
		byteSize = new Property<number>()
			.init(100);
	}
}