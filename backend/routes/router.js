const router = require('express').Router();

// cliente router
const clienteRouter = require('./cliente');

router.use('/', clienteRouter);

module.exports = router;
