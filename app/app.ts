///<reference path="core/Factory.ts"/>
///<reference path="threeAdapter.ts"/>
///<reference path="core/core.ts"/>
///<reference path="controllers/controllers.ts"/>

import Core = App.Core;
import Controllers = App.Controllers;

window.onload = () => {
	Core.Factory.register(
		new Core.IIPoint3D(App.ThreeAdapter.Point3D));

	var test = Core.Factory
		.create<Core.IPoint3D>(
			new Core.IIPoint3D(),
			new Core.IIPoint3DArgs(2, 4, 6));
	
	console.log(test);
};