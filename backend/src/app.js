require('dotenv').config();// llama a las variables de entorno

const express = require('express');
const cors = require("cors");
const app = express();

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.urlencoded({extended: false})); //???
app.use(cors());
app.use(express.json()); //indico q use el format JSON de express

//routes
app.get("/", (req,res) => {
    res.send("WELCOME TO MY API");
  });

module.exports = app;