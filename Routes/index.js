'use strict'

const express = require('express')
const LibroCtrl = require('../Controllers/LIbros')
const userCtrl = require('../Controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.post('/libro', LibroCtrl.saveLibro)
//api.get('/libro', LibroCtrl.getLibros)
api.get('/libro/:libroX',LibroCtrl.getLibro)
//api.put('/libro/:libroId', auth, LibroCtrl.updateLibro)
api.delete('/libro/:libroId', auth, LibroCtrl.deleteLibro)
api.post('/signUp', userCtrl.signUp)
api.post('/signIn', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
	res.status(200).send({ message: 'acceso'})
})

module.exports = api