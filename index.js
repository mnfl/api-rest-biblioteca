'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const http = require('http')

mongoose.connect(config.db,(err, res) => {
	if(err){
		return console.log(`Error al conectar: ${err}`)
	}
	console.log(('conexion establecida'))

	const server = http.createServer(app)

	server.listen(config.port, () => {
	console.log( `Api Rest: ${config.port}` )
	//console.log(port)
	})	
})

