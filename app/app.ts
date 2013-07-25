///<reference path="typings/three.d.ts"/>
///<reference path="core/observable.ts"/>
///<reference path="core/objects.ts"/>
///<reference path="core/assets.ts"/>
///<reference path="controllers/boardController.ts"/>

import Core = App.Core;
import Controllers = App.Controllers;

window.onload = () => {
	var a = new Core.Asset();
	a.path("madderfakker");

	console.log(a.path());
};