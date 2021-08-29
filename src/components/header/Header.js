import { ExcelComponent } from '../../core/ExcelComponent';
import * as actions from '../../redux/actions';

export class Header extends ExcelComponent {
	constructor(root, options) {
		super(root, {
			name: 'Header',
			listeners: ['input'],
			...options
		});
	}

	static className = 'excel__header';

	toHTML() {
		return `
			<input type="text" name="name" class="input" placeholder="Новая таблица" value="${this.getTableName()}" />

			<div class="btns">
				<div class="btn btn-white"><span class="material-icons">logout</span></div>
				<div class="btn btn-white"><span class="material-icons">delete</span></div>
			</div>
		`;
	}

	getTableName() {
		return this.store.getState().headerState ? this.store.getState().headerState.name : '';
	}

	onInput(event) {
		const text = event.target.value;
		console.log(text);
		this.$dispatch(actions.headerInput(text));
	}
}
