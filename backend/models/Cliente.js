const mongoose = require('mongoose');
const { Schema } =  mongoose;


const ClienteSchema = new Schema({
    numero:{type: Number, require: true},
    nome:{type: String, require: true},
    leitAnt:{type: Number, require: true},
    leitAtual:{type: Number, require: true}
}, {timestamp: true})

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = {
    Cliente,
    ClienteSchema,
}