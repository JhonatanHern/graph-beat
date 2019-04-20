const fs = require('fs')
let schema
try{
	schema = fs.readFileSync('./store/schema.gql')
}catch(e){
	if (e.code==='ENOENT') {
		console.log( 'schema file not found' )
	}
	console.log(e.code)
	console.log(e)
	process.exit()
}
module.exports = schema.toString()