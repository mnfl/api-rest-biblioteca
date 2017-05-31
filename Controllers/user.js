'use strict'

const mongoose = require('mongoose')
const User = require('../models/users')
const service = require('../services')

function signUp (req, res) {//registro
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
		//avatar: req.body,
	})

	user.save((err) => {
		if(err)
			res.status(500).send({message: `error al crear usar: ${err}`})
		return res.status(200).send({token: service.createToken(user)})
	})
}

function signIn(req, res){
	User.find({ email: req.body.email }, (err, user) => {
		if(err){
			return res.status(500).send({ message: err })
		}
		if(!user){
			return res.status(404).send({ message: 'no existe' })
		}

		req.user = user
		req.status(200).send({
			message: 'loqueado',
			token: service.createToken(user)
		})
	})
}

module.exports = {
	signUp,
	signIn
}