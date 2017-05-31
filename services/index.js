'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user){
	const payload = {
		sub: user._id,
		//cambiar para mayor seguridad ya que esta utilizando de mongodb
		iat: moment().unix(),
		//cuando crea token
		exp: moment().add(10, 'days').unix(),
		//cuando expira token
	}

	return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token){
	const decoded = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, config.SECRET_TOKEN)
			if(payload.exp <= moment().unix()){
				reject({
					status: 401,
					message: 'ha expirado'
				})
			}
			resolve(payload.sub)
		} catch(err) {
			reject({
				status: 500,
				message: 'invalido'
			})
		}
	})
	return decoded
}

module.exports = {
	createToken,
	decodeToken
}