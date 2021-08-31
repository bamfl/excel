import { ExcelComponent } from '../../core/ExcelComponent';
import { ActiveRoute } from '../../core/routes/ActiveRoute';
import * as actions from '../../redux/actions';

export class Header extends ExcelComponent {
	constructor(root, options) {
		super(root, {
			name: 'Header',
			listeners: ['input', 'click'],
			...options
		});
	}

	static className = 'excel__header';

	toHTML() {
		return `
			<input type="text" name="name" class="input" placeholder="Новая таблица" value="${this.getTableName()}" />

			<div class="btns">
				<a href="#dashboard" class="btn btn-white"><span class="material-icons">logout</span></a>
				<a href="#dashboard" class="btn btn-white"><span class="material-icons delete">delete</span></a>
			</div>
		`;
	}

	getTableName() {
		return this.store.getState().headerState ? this.store.getState().headerState.name : '';
	}

	onInput(event) {
		const text = event.target.value;
		this.$dispatch(actions.headerInput(text));
	}

	onClick(event) {
		if (event.target.className === 'material-icons delete') {
			const tableKey = ActiveRoute.param;
			localStorage.removeItem(`excel:${tableKey}`);
		}
	}
}
