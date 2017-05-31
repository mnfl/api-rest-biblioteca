module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb://localhost:27017/biblioteca',
	SECRET_TOKEN: 'miclavedetokens...'
	//cambiar a un codigo mas largo y complicado
}