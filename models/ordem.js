const mongoose = require('../database')

const OrdemSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        required: true,
      },
      servico: {
        type: String,
        required: true,
      },
      Cliente: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cliente',
          required: true,
      },
      Finalizada: {
        type: Boolean,
        require: true,
        default: false,
      },
      dataServico: {
        type: Date,
        default: Date.now,
      }
})






const Ordem= mongoose.model('Ordem', OrdemSchema)

module.exports = Ordem