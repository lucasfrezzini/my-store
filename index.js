const express  = require('express');
const routerApi = require('./src/routes/');
const app = express();
const port = 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('./src/middlewares/error.handler')

//middleware para enviar el data en el POST
app.use(express.json());

app.listen(port, () => {
	console.log('Mi port' + port);
})

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => {
	res.send('Hola mi server en express')
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Hola mi server en express2')
});








