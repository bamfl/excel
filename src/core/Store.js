import { rootReducer } from '../redux/rootReducer';

// export function createStore(rootReducer, initialState = {}) {
// 	let state = rootReducer({ ...initialState }, { type: '##INIT##'} );
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

// 		getState() {
// 			return state;
// 		}
// 	};
// }

// Extra task
export class Store {
	#state;
	#listeners;

	constructor(rootReducer, initialState = {}) {
		this.#state = rootReducer({ ...initialState }, { type: '__INIT__'} );
		this.#listeners = [];
	}

	dispatch(action) {
		this.#state = rootReducer(this.#state, action);
		this.#listeners.forEach(listener => listener(this.#state));
	}

	subscribe(fn) {
		this.#listeners.push(fn);

		return () => this.#listeners = this.#listeners.filter(listener => listener !== fn);
	}	

	getState() {
		return this.#state;
	}
}
