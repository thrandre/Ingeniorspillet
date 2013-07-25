module App.Core {
	export function NotNullOrEmpty<T>(val: T): boolean {
		if (typeof val !== "undefined") {
			return true;
		}
		return false;
	}
}