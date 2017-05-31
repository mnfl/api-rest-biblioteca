'use strict'

const express = require('express')
const cgi = require('cgi')
const path = require('path')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const htmlTable = require('helper-html-table')
const php = require('phpjs')//.registerExtension()
const mime = require('mime-types')
const app = express()
const LibroCtrl = require('./Controllers/LIbros')
const api = require('./Routes')
const routes = require('./Routes/Public')
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// view engine setup
//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'jade')
app.engine('hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs'
}))
app.set('view engine', '.hbs')
/*app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'))
  	//__dirname : It will resolve to your project folder.
})*/
app.get('/', (req,res) => {
	//res.render('inicio')
	res.render(path.join(__dirname+'/views/inicio'))
  	//__dirname : It will resolve to your project folder.
})

app.use('/', routes)
app.use('/api', api)

app.use(require('stylus').middleware(path.join(__dirname, 'public/CSS')))
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app