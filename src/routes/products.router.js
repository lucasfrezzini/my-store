const express  = require('express');
const ProductsServices = require('../services/product.service');

const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, res) => {
	const products = await service.find();
	res.json(products);
});

// router.get('/filter', (req, res) => {
//     res.send('Soy un filter');
// });

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const product = await service.findOne(id);
	product ?	res.json(product) : res.json('Not product found');
});

router.post('/', async (req, res) => {
	const body = req.body;
	const newProduct = await service.create(body);

	res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const updateProduct = await service.update(id, body);
		res.json(updateProduct);
	} catch (error) {
		res.status(404).json({
			message: error.message
		})
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await service.delete(id);

		res.json(result)
	} catch (error) {
		res.status(404).json({
			message: error.message
		})
	}
})

module.exports = router;
