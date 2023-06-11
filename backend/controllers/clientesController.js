const {Cliente: ClienteModel} = require('../models/Cliente');

const clienteController = {
    create: async(req, res) => {
        try {
            const cliente = {
                numero: req.body.numero,
                nome: req.body.nome,
                leitAnt: req.body.leitAnt,
                leitAtual: req.body.leitAtual,
            }

            const response = await ClienteModel.create(cliente);

            res.status(201).json({response, msg: "Cliente criado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async  (req,res) => {
        try {
            const cliente = await ClienteModel.find();

            res.json(cliente);
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req,res) => {
        try {
            const id = req.params.id;
            const cliente = await ClienteModel.findById(id)

            if(!cliente){
                res.status(404).json({msg:"Cliente não encontrado."});
                return;
            }
            res.json(cliente)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req,res) => {
        try {
            const id = req.params.id;
            const cliente = await ClienteModel.findById(id)

            if(!cliente){
                res.status(404).json({msg:"Cliente não encontrado."});
                return;
            }

            const deleteCliente = await ClienteModel.findByIdAndDelete(id)
            res.status(200).json({deleteCliente,msg: "Cliente deletado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {

            const id = req.params.id;

            const cliente = {
                numero: req.body.numero,
                nome: req.body.nome,
                leitAnt: req.body.leitAnt,
                leitAtual: req.body.leitAtual,
            }

            const updateCliente = await ClienteModel.findByIdAndUpdate(id, cliente);

            if(!updateCliente){
                res.status(404).json({msg: "Serviço não ennconntrado!"})
            }

            res.status(200).json({cliente, msg: "Cliente atualizado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = clienteController