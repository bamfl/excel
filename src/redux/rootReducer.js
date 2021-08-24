import { 	ROW_RESIZE , COL_RESIZE, CELL_INPUT, } from "./types";

// Pure function
export function rootReducer(state, action) {
	let prevColState;
	let prevRowState;
	let prevCellState;

	switch (action.type) {
		case COL_RESIZE: 
			prevColState = state.colState || {};
			prevColState[action.data.id] = action.data.value;

			return {
				...state, 
				colState: prevColState
			};
		
		case ROW_RESIZE: 
			prevRowState = state.rowState || {};
			prevRowState[action.data.id] = action.data.value;

			return {
				...state, 
				rowState: prevRowState
			};

		case CELL_INPUT:
			prevCellState = state.cellState || {};
			prevCellState[action.data.id] = action.data.value;

			return {
				...state, 
				cellState: prevCellState
			};

		default: return state;
	}
}