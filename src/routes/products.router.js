const express  = require('express');
const faker  = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	const { size } = req.query;
	const limit = size || 10;
	const products = [];
	for (let index = 0; index < limit; index++) {
		products.push(
			{
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.imageUrl(),
			}
		)
	}
	res.json(products);
});

router.get('/filter', (req, res) => {
    res.send('Soy un filter');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	if ( id === '999') {
		res.status(404).json(
			{
				message: 'not found 404'
			}
		)
	} else {
		res.status(200).json(
			{
				id,
				name: 'Product 4',
				price: 2000
			}
		)
	}
});

router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		message: 'created',
		data: body,
	})
})

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({
		message: 'update',
		id,
		data: body,
	})
})

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		message: 'delete',
		id
	})
})

module.exports = router;