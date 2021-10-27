const faker = require('faker');

class CategoriesServices {
	constructor() {
		this.categories = [];
		this.generate();
	}
	generate() {
		const limit = 10;
		for (let index = 0; index < limit; index++) {
			this.categories.push(
				{
					id: faker.datatype.uuid(),
					name: faker.music.genre()
				}
			);
		}
	}
	create() {

	}

	find() {
		return this.categories;
	}

	findOne(id){
		return this.categories.find(category => category.id === id);
	}

	update() {

	}

	delete() {

	}
}

module.exports = CategoriesServices;
