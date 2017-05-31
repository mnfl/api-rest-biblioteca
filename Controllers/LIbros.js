'use strict'
const Book = require('../models/libro')
const Datos = require('../public/JS/recibir')

function saveLibro(req, res){
	console.log('POST /api/libro')
	console.log(req.body)

	let libro = new Book()
	libro.titulo = req.body.titulo
	libro.autor = req.body.autor
	libro.clasificacion = req.body.clasificacion
	libro.isbn = req.body.isbn
	libro.estado = req.body.estado
	libro.numadq = req.body.numadq

	libro.save((err, bookStored) => {
		if(err){
			res.status(500).send({message: `error al guardar: ${err}`})
			console.log('error al guardar')
		}
		res.status(200).send({libro: bookStored})
	})
}

function getLibros(req, res){
	//res.send(200, {libros: []})
	Book.find({}, (err, libros) => {
		if(err)
			return res.status(500).send({message: `error: ${err}`})
		if(!libros)
			return res.status(404).send({message: `no hay libros`})

		res.status(200).send({libros})
	})
}

function getLibro(req, res){
	let libroX = req.params.libroX
	Book.find({ $or: [{titulo: libroX}, {autor: libroX}] }, (err, libro) => {
		if(err){
			return res.status(500).send({message: `error: ${err}`})
			console.log('error')
		}
		if (!libro){
			return res.status(404).send({ message: `no existe` })
			console.log('no existe')
		}
		res.status(200).send({ libro })
		//Datos.generarTabla(libro)
	})
	//res.status(200).send({ libroX })
}

/*function updateLibro(req, res){
	let libroId = req.params.libroId
	let update = req.body

	Book.findByIdAndUpdate(libroId, update, (err, libroUpdated) => {
		if(err)
			res.status(500).send({message: `error al borrar: ${err}`})

		res.status(200).send({libro: libroUpdated})
	})
}
*/
function deleteLibro(req, res){
	let libroId = req.params.libroId

	Book.findById(libroId, (err, libro) => {
		if(err)
			res.status(500).send({message: `error al borrar: ${err}`})

		libro.remove(err => {
			if(err){
				res.status(500).send({message: `error al borrar: ${err}`})
			}
			res.status(200).send({message: `borrado exitoso`})
		})
	})
}
module.exports = {
	saveLibro,
	getLibro,
	getLibros,
	//updateLibro,
	deleteLibro	
}