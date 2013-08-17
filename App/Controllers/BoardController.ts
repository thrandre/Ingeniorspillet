///<reference path="../core/Observable.ts"/>

module App.Controllers {
	import Core = App.Core;

	export class BoardController extends Core.Observable {
		static Events = {
			Die: new Core.ObservableEvent("BoardController.Die")
		};

		die(): void {
			this.on(BoardController.Events.Die);
		}
	}
}