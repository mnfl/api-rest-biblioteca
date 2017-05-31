'use strict'

const mongoose = require('../node_modules/mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	displayName: String,
	avatar: String,
	password: { type: String, select: false },
	signupDate: { type: Date, default: Date.now() },
	lastLogin: Date
})

UserSchema.pre('save', (next) => {
	let user = this
	if(!user.isModified('password'))
		return next(err)
	bcrypt.genSalt(10, (err, salt) => {
		if(err)
			return next()
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err)
				return next(err)
			user.password = hash
			next()
		})
	})
})

UserSchema.methods.gravatar = function() {
	if(!this.email)
		return 'http://gravatar.com/avatar/?s=2006d=retro'
	const md5 = cryto.createHash('md5').update(this.email).digest('hex')
	return `http://gravatar.com/avatar/${md5}?s=2006d=retro`
}

module.exports = mongoose.model('User',UserSchema)