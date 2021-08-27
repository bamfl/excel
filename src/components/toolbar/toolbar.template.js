const buttons = [
	{
		name: 'subject',
		active: true,
		value: {'text-align': 'left'}
	},		 
	{
		name: 'format_align_justify',
		active: false,
		value: {'text-align': 'center'}
	},
	{
		name: 'segment',
		active: false,
		value: {'text-align': 'right'}
	},
	{
		name: 'format_bold',
		active: false,
		value: {'font-weight': 900}
	},
	{
		name: 'format_italic',
		active: false,
		value: {'font-style': 'italic'}
	},
	{
		name: 'format_underlined',
		active: false,
		value: {'text-decoration': 'underline'}
	}
];

export function createToolbar() {
	let toolbar = '';

	buttons.forEach(button => {
		toolbar += `
			<div class="btn btn-black ${button.active ? 'active' : null} ">
				<span 
					class="material-icons"				
					data-value='${JSON.stringify(button.value)}
				'>
					${button.name}
				</span>
			</div>
		`;
	});	

	return toolbar;
}

export function renderToolbar(selectedCellState = {}, toolbar) {	
	if (!selectedCellState['text-align']) {
		selectedCellState['text-align'] = 'left';
	}
	
	const buttons = [...toolbar.children];

	buttons.forEach(btn => {
		const icon = btn.firstElementChild;
		const iconAttr = JSON.parse(icon.dataset.value);

		btn.classList.remove('active');

		Object.keys(iconAttr).forEach(key => {
			if (iconAttr[key] === selectedCellState[key]) {
				btn.classList.add('active');
			}
		});
	});

}
