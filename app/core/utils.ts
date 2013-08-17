module App.Core {
	function DefinedAndNotNullCheck(value: any, checkEmptyString?: boolean): boolean {
		return typeof value !== "undefined"
			&& value !== null
			&& (!checkEmptyString || value !== "");
	}

	export function DefinedAndNotNull(root: any, pattern?: string, checkEmptyString?: boolean) {
		if (!DefinedAndNotNullCheck(root, checkEmptyString)) {
			return false;
		}

		if (!DefinedAndNotNullCheck(pattern, true)) {
			return DefinedAndNotNullCheck(root);
		}

		var segments = pattern.split(".");

		if (pattern.charAt(0) === "$" && segments.length === 1) {
			return DefinedAndNotNullCheck(root);
		}

		var parent = root;
		for (var i = 1; i < segments.length; i++) {
			var child = parent[segments[i]];
			if (DefinedAndNotNullCheck(child, checkEmptyString)) {
				parent = child;
			}
			else {
				return false;
			}
		}

		return true;
	}
}