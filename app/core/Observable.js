var App;
(function (App) {
    (function (Core) {
        var ObservableEvent = (function () {
            function ObservableEvent(name) {
                this.name = name;
            }
            return ObservableEvent;
        })();
        Core.ObservableEvent = ObservableEvent;

        var ObserverSubscription = (function () {
            function ObserverSubscription(observer, event) {
                this.observer = observer;
                this.event = event;
            }
            return ObserverSubscription;
        })();

        var Observable = (function () {
            function Observable() {
                this._observers = new Array();
            }
            Observable.prototype.notify = function (observer, event) {
                this._observers.push(new ObserverSubscription(observer, event));
            };

            Observable.prototype.on = function (event) {
                this._observers.forEach(function (observerSubscription) {
                    return observerSubscription.observer.observe(event, null);
                });
            };
            return Observable;
        })();
        Core.Observable = Observable;
    })(App.Core || (App.Core = {}));
    var Core = App.Core;
})(App || (App = {}));
//@ sourceMappingURL=observable.js.map
