import { COL_RESIZE, ROW_RESIZE, CELL_INPUT, HEADER_INPUT, TOOLBAR_INPUT } from "./types";

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

export function toolbarInput(data) {
	return {
		type: TOOLBAR_INPUT,
		data
	};
}