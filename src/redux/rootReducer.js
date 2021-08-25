import { 	ROW_RESIZE , COL_RESIZE, CELL_INPUT, HEADER_INPUT } from "./types";

// Pure function
export function rootReducer(state, action) {
	let prevColState, prevRowState, prevCellState, prevHeaderState;

	switch (action.type) {
		case COL_RESIZE: 
			prevColState = state.colState || {};
			prevColState[action.data.id] = action.data.value;

			return {...state, colState: prevColState};
		
		case ROW_RESIZE: 
			prevRowState = state.rowState || {};
			prevRowState[action.data.id] = action.data.value;

			return {...state, rowState: prevRowState};

		case CELL_INPUT:
			prevCellState = state.cellState || {};
			prevCellState[action.data.id] = action.data.value;

			return {...state, cellState: prevCellState};

		case HEADER_INPUT:
			prevHeaderState = state.headerState || {};
			prevHeaderState.name = action.data;

			return {...state, headerState: prevHeaderState};

		default: return state;
	}
}