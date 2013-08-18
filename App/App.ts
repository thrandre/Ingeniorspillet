///<reference path="Typings/JQuery.d.ts"/>
///<reference path="Core/IoCContainer.ts"/>
///<reference path="Adapters/Three/ThreeAdapter.ts"/>
///<reference path="Game/GameEntity.ts"/>

import Core = App.Core;
import Container = App.Core.IoCContainer;
import ThreeAdapter = App.Adapters.ThreeAdapter;
import Game = App.Game;

function bootstrapAdapter() {
	Container.register(
		new Core.IIRenderer(ThreeAdapter.WebGlRenderer));

	Container.register(
		new Core.IICamera(ThreeAdapter.PerspectiveCamera));

	Container.register(
		new Core.IIScene(ThreeAdapter.Scene));

	Container.register(
		new Core.IIVector3D(ThreeAdapter.Vector3D));

	Container.register(
		new Core.IIPoint3D(ThreeAdapter.Point3D));

	Container.register(
		new Core.IIRotation3D(ThreeAdapter.Rotation3D));

	Container.register(
		new Core.IIScale3D(ThreeAdapter.Scale3D));

	Container.register(
		new Core.IIObject3D(ThreeAdapter.Object3D));
}

$(() => {
	bootstrapAdapter();
	var camera = Container.resolve<Core.ICamera>(new Core.IICamera()).create(35, 1920 / 1080, 0, 1000);
	var renderer = Container.resolve<Core.IRenderer>(new Core.IIRenderer()).create();
	console.log(camera);
});