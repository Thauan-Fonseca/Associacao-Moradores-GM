const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://thauan:vg0o0CqI2Xeml2Ye@cluster0.gjrgfxg.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Conectado ao Banco de Dados!")
    } catch (error) {
        console.log(error);
    }
}

module.exports =  main