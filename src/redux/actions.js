import { COL_RESIZE, ROW_RESIZE, CELL_INPUT, HEADER_INPUT } from "./types";

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

export function headerInput(data) {
	return {
		type: HEADER_INPUT,
		data
	};
}