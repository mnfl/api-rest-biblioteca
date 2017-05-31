'use strict'

const services = require('../services')

function isAuth(req, res){
	if(!req.headers.authorization){
		return res.status(403).send({ message: 'no tienes autorizacion' })
	}
	const token = req.headers.authorization.split("")[1]
	
	services.decodeToken(token)
		.them(response => {
			req.user = response
			next()
		})
		.catch(response => {
			res.status(response.status)
		})
}

module.exports = isAuth