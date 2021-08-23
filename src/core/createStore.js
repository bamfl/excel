import { rootReducer } from '../redux/rootReducer';

// export function createStore(rootReducer, initialState = {}) {
// 	let state = rootReducer({ ...initialState }, { type: '__INIT__'} );
// 	let listeners = [];

// 	return {
// 		subscribe(fn) {
// 			listeners.push(fn);

// 			return () => listeners = listeners.filter(listener => listener !== fn);
// 		},

// 		dispatch(action) {
// 			state = rootReducer(state, action);
// 			listeners.forEach(listener => listener(state));
// 		},

// 		showStore() {
// 			return state;
// 		}
// 	};
// }

export class CreateStore {
	constructor(rootReducer, initialState = {}) {
		this._state = rootReducer({ ...initialState }, { type: '__INIT__'} );
		this._listeners = [];
	}

	subscribe(fn) {
		this._listeners.push(fn);

		return () => this._listeners = this._listeners.filter(listener => listener !== fn);
	}

	dispatch(action) {
		this._state = rootReducer(this._state, action);
		this._listeners.forEach(listener => listener(this._state));
	}

	showStore() {
		return this._state;
	}
}
