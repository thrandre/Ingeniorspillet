module App.Core {
	export interface IObservable {
		notify(observer: IObserver, event: IObservableEvent): void;
		on(event: IObservableEvent): void;
	}
	
	export interface IObserver {
		observe(event: IObservableEvent, argument: any): void;
	}

	export interface IObservableEvent {
		name: string;
	}

	export class ObservableEvent implements IObservableEvent{
		constructor(public name: string) { }
	}

	interface IObserverSubscription {
		observer: IObserver;
		event: IObservableEvent;
	}

	class ObserverSubscription implements IObserverSubscription {
		constructor(public observer: IObserver, public event: IObservableEvent) { }
	}

	export class Observable implements IObservable {
		private _observers: Array<IObserverSubscription> = new Array<IObserverSubscription>();
		
		notify(observer: IObserver, event: IObservableEvent): void {
			this._observers.push(
				new ObserverSubscription(observer, event)
			);
		}

		on(event: IObservableEvent): void {
			this._observers.forEach(
				(observerSubscription: IObserverSubscription) =>
					observerSubscription.observer.observe(event, null)
			);
		}
	}
}