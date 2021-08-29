export function capitlize(string) {
	if (typeof string !== 'string') {
		return '';
	}

	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function storage(key, data = null) {
	if (!data) {
		return JSON.parse(localStorage.getItem(key));
	}

	localStorage.setItem(key, JSON.stringify(data));
}

export function debounce(fn, wait) {
	let timeout;

	return function(...args) {
		const later = () => {
			clearTimeout(timeout)
			fn.apply(this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);	
	};
}