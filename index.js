const express  = require('express');
const faker  = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hola mi server en express')
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Hola mi server en express2')
});

app.get('/products-v1', (req, res) => {
	res.json({
		name: 'Product 1',
		price: 2000,
	})
});

app.get('/products', (req, res) => {
	const products = [];
	for (let index = 0; index < 100; index++) {
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

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	res.json(
		{
			id,
			name: 'Product 4',
			price: 2000
		}
	)
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json(
		{
			categoryId,
			productId,
		}
	)
})

app.listen(port, () => {
	console.log('Mi port' + port);
})
