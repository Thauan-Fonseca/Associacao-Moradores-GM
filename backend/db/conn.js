const mongoose = require('mongoose');
require("dotenv").config();

async function main() {
    try {
        await mongoose.connect(
            process.env.MONGO_DB_URL
        )
        console.log("Conectado ao Banco de Dados!")
    } catch (error) {
        console.log(error);
    }
}

module.exports =  main