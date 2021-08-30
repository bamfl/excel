import { ActiveRoute } from './ActiveRoute';

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('There is not selector in Router');
    }

    this.appElement = document.querySelector(selector);
    this.routes = routes;
    this.changePageHandler = this.changePageHandler.bind(this);
		this.page = null;

    this.init();
  }  

  changePageHandler() {
		if (this.page) {
			this.page.destroy();
		}

		this.appElement.innerHTML = '';

    const activePageHash = ActiveRoute.path;

		const Page = (activePageHash.startsWith('excel')) ? this.routes.excel : this.routes.dashboard;
		this.page = new Page(ActiveRoute.param);

		this.appElement.append(this.page.getRoot());
		this.page.afterRender();
  }

	init() {
    window.addEventListener('hashchange', this.changePageHandler);
    this.changePageHandler();
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler);
  }
}
