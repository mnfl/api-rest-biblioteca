'use strict'

const mongoose = require('../node_modules/mongoose')
const Schema = mongoose.Schema

const LibroSchema = Schema({
	titulo: String,
	autor: String,
	clasificacion: String,
	isbn: String,
	estado: {type: Boolean, defaul: true},
	numadq: Number
})

module.exports = mongoose.model('Libro', LibroSchema)