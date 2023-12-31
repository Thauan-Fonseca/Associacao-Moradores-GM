const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// DB connection
const conn = require('./db/conn');

conn();

// Rotas
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(3000, function() {
    console.log("O Servidor está online!")
});


// Thauan
// vg0o0CqI2Xeml2Ye