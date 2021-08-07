export const module1 = () => {
  console.log('Модуль 1');

	async function start() {
		await Promise.resolve(console.log('Babel works'));
	}

	start();
};
