///<reference path="Typings/JQuery.d.ts"/>
///<reference path="Core/Factory.ts"/>
///<reference path="Adapters/Three/ThreeAdapter.ts"/>
///<reference path="Game/GameEntity.ts"/>

import Core = App.Core;
import ThreeAdapter = App.Adapters.ThreeAdapter;
import Game = App.Game;

function bootstrapAdapter() {
	Core.Factory.register(
		new Core.IIRenderer(ThreeAdapter.WebGlRenderer));

	Core.Factory.register(
		new Core.IICamera(ThreeAdapter.PerspectiveCamera));

	Core.Factory.register(
		new Core.IIScene(ThreeAdapter.Scene));

	Core.Factory.register(
		new Core.IIVector3D(ThreeAdapter.Vector3D));

	Core.Factory.register(
		new Core.IIPoint3D(ThreeAdapter.Point3D));

	Core.Factory.register(
		new Core.IIRotation3D(ThreeAdapter.Rotation3D));

	Core.Factory.register(
		new Core.IIScale3D(ThreeAdapter.Scale3D));

	Core.Factory.register(
		new Core.IIObject3D(ThreeAdapter.Object3D));
}

var camera;
var scene;
var renderer;

$(() => {
	bootstrapAdapter();

	camera = Core.Factory.create<Core.ICamera>(
		new Core.IICamera(),
		new Core.IICameraArgs(35, 1920 / 1080, 1, 10000));

	scene = Core.Factory.create<Core.IScene>(
		new Core.IIScene());

	renderer = Core.Factory.create<Core.IRenderer>(
		new Core.IIRenderer());

	renderer.size = new Core.Rectangle(1920, 1080);

	$(document.body).append(renderer.domElement);

	animate();
});

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}