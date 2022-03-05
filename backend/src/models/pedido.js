const mongoose = require("mongoose");

const pedidoSchema = mongoose.Schema({
  /*
  detalle: [{
    producto: {
      type: Schema.Types.ObjectId,
      ref: 'Producto' },
    //precio: {type: Schema.Types.Number, ref: 'Producto'}
    cantidad: { type: Number, default: 1 },
      /*
      producto: Object, 
      cantidad: Number,
      precioUnitario: Number
      
  }],*/

  precioTotal: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  nota: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Pedidos', pedidoSchema);