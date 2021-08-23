import '../scss/style.scss';
import '../scss/header.scss';
import '../scss/toolbar.scss';
import '../scss/table.scss';
import '../scss/formula.scss';
import '../scss/dashboard.scss';

import { Excel } from '../components/excel/Excel';
import { Header } from '../components/header/Header';
import { Toolbar } from '../components/toolbar/Toolbar';
import { Formula } from '../components/formula/Formula';
import { Table } from '../components/table/Table';
import { createStore } from '../core/createStore';
import { rootReducer } from '../redux/rootReducer';

const store = createStore(rootReducer);

const excelApp = new Excel('#app', {
	components: [
		Header,
		Toolbar,
		Formula,
		Table
	],
	store
});

excelApp.render();
