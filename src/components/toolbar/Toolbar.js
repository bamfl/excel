import { ExcelComponent } from '../../core/ExcelComponent';
import { createToolbar } from './toolbar.template';

export class Toolbar extends ExcelComponent {
	constructor(root, options) {
		super(root, {
			name: 'Toolbar',
			listeners: ['click'],
			...options
		});
	}

	static className = 'excel__toolbar';

	toHTML() {
		return createToolbar();
	}

	onClick(event) {
		if (event.target.classList.contains('material-icons')) {
			console.log('Toolbar: onClick', event.target);
		}
	}
}
