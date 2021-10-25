const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

// CONFIG APIS NAMES
const API_V1 = '/api/v1';

function routerApi(app) {
    const router = express.Router();
    app.use(API_V1, router);

    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
};

module.exports = routerApi;