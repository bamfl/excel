import { ExcelComponent } from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
	constructor(root) {
		super(root, {
			name: 'Toolbar',
			listeners: ['click']
		});
	}

	static className = 'excel__toolbar';

	toHTML() {
		return `
			<div class="btn btn-black"><span class="material-icons">subject</span></div>
			<div class="btn btn-black"><span class="material-icons">format_align_justify</span></div>
			<div class="btn btn-black"><span class="material-icons">segment</span></div>
			<div class="btn btn-black"><span class="material-icons">format_bold</span></div>
			<div class="btn btn-black"><span class="material-icons">format_italic</span></div>
			<div class="btn btn-black"><span class="material-icons">format_underlined</span></div>
		`;
	}

	onClick(event) {
		console.log('Toolbar: onClick', event.target);
	}
}
