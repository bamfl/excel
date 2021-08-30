import { Page } from '../core/routes/Page';
import { Excel } from '../components/excel/Excel';
import { Header } from '../components/header/Header';
import { Toolbar } from '../components/toolbar/Toolbar';
import { Formula } from '../components/formula/Formula';
import { Table } from '../components/table/Table';
import { Store } from '../core/Store';
import { rootReducer } from '../redux/rootReducer';
import { storage } from '../core/utils';

export class ExcelPage extends Page {
  constructor(params) {
    super(params);
  }

  getRoot() {
		console.log(this.params);
    const store = new Store(rootReducer, storage('excel-state'));

    const stateListener = (state) => {
      storage('excel-state', state);
    };

    store.subscribe(stateListener);

    this.excelApp = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return this.excelApp.getRoot().el;
  }

	afterRender() {
		this.excelApp.init();
	}

	destroy() {
		this.excelApp.destroy();
	}
}
