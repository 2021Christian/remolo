const mongoose = require("mongoose");

const prodSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  /*
  idCategoria: { 
    type : Schema.Types.ObjectId, ref : "Categorias",
    required: true
  }
  /*
  "Categoria" : {
    "id": objectId,
    required: true
  }
  */
});

module.exports = mongoose.model('Productos', prodSchema);