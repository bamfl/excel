import { storage } from '../core/utils';

export function createDashboardList() {
  const keys = getAllExcelTableKeys();

  if (!keys.length) {
    return '<h2 class="table__title">Список пуст! Создайте свою первую таблицу!</h2>';
  }

  return `
		<div class="dashboard__table table">
			<div class="table__header">
				<div>Название</div>
				<div>Дата открытия</div>
			</div>

			<ul class="table__list">
				${createListHTML(keys)}
			</ul>
		</div>		
	`;
}

export function createListHTML(keys) {
  const liHTML = [];

  keys.forEach((key) => {
    const tableKey = key.slice(6);
		const tableTitle = storage(key).headerState ? storage(key).headerState.name : 'Новая таблица';
		const tableDate = storage(key).timeState ? storage(key).timeState.time : '';

		liHTML.push(`
			<a href="#excel/${tableKey}" class="record">
				<div>${tableTitle}</div>
				<strong>${tableDate}</strong>
			</a>	
		`);
  });

  return liHTML.join('');
}

function getAllExcelTableKeys() {
  let keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.includes('excel:')) {
      keys.push(key);
    } else {
      continue;
    }
  }

  return keys;
}
