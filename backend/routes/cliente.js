const router = require('express').Router();

const clienteController = require('../controllers/clientesController');

router
.route('/clientes')
.post((req,res) => clienteController.create(req,res));

router
.route('/clientes')
.get((req,res) => clienteController.getAll(req,res))

router
.route('/clientes/:id').get((req,res) => clienteController.get(req,res));

router
.route('/clientes/:id')
.delete((req,res) => clienteController.delete(req,res))

router
.route('/clientes/:id')
.put((req,res) => clienteController.update(req,res))

module.exports = router;