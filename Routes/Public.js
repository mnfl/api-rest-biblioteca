const express = require('express');
const inicio = express.Router();

/* GET home page. */
inicio.get('/', function(req, res, next) {
  	//res.render('index')
  	res.render('Agregar')
});

// Index
/*app.use(
	inicio.get('/', function(req, res) { 
		//res.send("Hola Mundo - www.programacion.com.py")
		res.render('index', { title: 'INICIO'})
	})
)*/

module.exports = inicio;