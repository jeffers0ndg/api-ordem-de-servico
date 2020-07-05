const express = require('express');

const Usuario = require('../models/usuario');

const router = express.Router()

router.post('/usuario', async (req, res) => {

    const { email } = req.body
    try {
      if (await Usuario.findOne({ email }))
        return res.status(400).send({ erro: 'Email já cadastrado' })
  
      const usuario = await Usuario.create(req.body)
  
      usuario.password = undefined
  
      return res.send({ 
        usuario
      })
  
    } catch (err) {
      return res.status(400).send({ erro: 'Falha no registro' })
    }

  });

  module.exports = app => app.use('/os', router)