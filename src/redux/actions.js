import { COL_RESIZE } from "./types";
import { ROW_RESIZE } from "./types";
import { CELL_INPUT } from "./types";

// Action creator
export function colResize(data) {
	return {
		type: COL_RESIZE,
		data
	};
}

export function rowResize(data) {
	return {
		type: ROW_RESIZE,
		data
	};
}

export function cellInput(data) {
	return {
		type: CELL_INPUT,
		data
	};
}