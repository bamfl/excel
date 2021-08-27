import { ExcelComponent } from '../../core/ExcelComponent';
import { createToolbar } from './toolbar.template';
import { renderToolbar } from './toolbar.template';
import * as actions from '../../redux/actions';

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

	getToolbarStateFromCell() {
		const selectedCellID = this.selectedCell.dataset.id;

		if (this.store.getState().cellState) {
			const selectedCellState =  this.store.getState().cellState[selectedCellID];	
			const tollbar = this.root.el;

			renderToolbar(selectedCellState, tollbar);
		}
	}

	onClick(event) {
		if (event.target.classList.contains('material-icons')) {
			const toolbarObj = JSON.parse(event.target.dataset.value);
			const tollbarDataKey = Object.keys(toolbarObj)[0];
			let toolbarValue = toolbarObj[tollbarDataKey];

			if (tollbarDataKey === 'font-weight' && event.target.parentElement.classList.contains('active')) {
				toolbarValue = '';
			} else if (tollbarDataKey === 'font-style' && event.target.parentElement.classList.contains('active')) {
				toolbarValue = '';
			} else if (tollbarDataKey === 'text-decoration' && event.target.parentElement.classList.contains('active')) {
				toolbarValue = '';
			}

			const tollbarData = {
				id: this.selectedCell.dataset.id,
				prop: tollbarDataKey,
				value: toolbarValue
			};

			this.$dispatch(actions.toolbarInput(tollbarData));
			this.getToolbarStateFromCell();
		}
	}

	init() {
		super.init();

		this.$on('table:select', async (selectedCell) => {
      this.selectedCell = await selectedCell;			
			this.getToolbarStateFromCell();
    });
	}
}
