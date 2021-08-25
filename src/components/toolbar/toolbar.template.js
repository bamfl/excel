const buttons = [
	{
		name: 'subject',
		active: false,
		value: {textAlign: 'left'}
	},		 
	{
		name: 'format_align_justify',
		active: false,
		value: {textAlign: 'center'}
	},
	{
		name: 'segment',
		active: false,
		value: {textAlign: 'right'}
	},
	{
		name: 'format_bold',
		active: false,
		value: {fontWeight: 'bold'}
	},
	{
		name: 'format_italic',
		active: false,
		value: {fontStyle: 'italic'}
	},
	{
		name: 'format_underlined',
		active: false,
		value: {textDecoration: 'underline'}
	}
];

export function createToolbar() {
	let toolbar = '';

	buttons.forEach(button => {
		toolbar += `
			<div class="btn btn-black ${button.active ? 'active' : ''}">
				<span class="material-icons" data-value='${JSON.stringify(button.value)}'>${button.name}</span>
			</div>
		`;
	});

	return toolbar;
}
