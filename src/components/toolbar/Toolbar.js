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

	getToolbarStateFromCell(selectedCell) {
		const selectedCellID = selectedCell.dataset.id;

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

			if (this.selectedGroup) {
				this.selectedGroup.forEach(selectedCellFromGroup => {
					const selectedCell = selectedCellFromGroup;
		
					const tollbarData = {
						id: selectedCell.dataset.id,
						prop: tollbarDataKey,
						value: toolbarValue
					};
		
					this.$dispatch(actions.toolbarInput(tollbarData));
					this.getToolbarStateFromCell(selectedCell);
				});
			} else {
				const selectedCell = this.selectedCell;
	
				const tollbarData = {
					id: selectedCell.dataset.id,
					prop: tollbarDataKey,
					value: toolbarValue
				};
	
				this.$dispatch(actions.toolbarInput(tollbarData));
				this.getToolbarStateFromCell(selectedCell);
			}
		}
	}

	init() {
		super.init();

		this.$on('table:select', async (selectedCell) => {
      this.selectedCell = await selectedCell;
			this.selectedGroup = null;		
			this.getToolbarStateFromCell(this.selectedCell);
    });

		this.$on('table:selectedgroup', async (selectedGroup) => {
      this.selectedGroup = await selectedGroup;
    });
	}
}
