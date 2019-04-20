const fs = require('fs')
const globalAppData = require('./globalAppData')

const DECIMAL_BASE = 10

module.exports = _ => {
	let config = fs.readFileSync('store/config.json')
	if (!config) {
		console.log('Error reading store/config.json\nresult:',config)
		throw config
	}
	try{
		config = JSON.parse(config)
	}catch(e){
		console.log('Error parsing store/config.json\n',config)
		throw e
	}
	if (!config.tracksDir) {
		throw 'Track directory missing in store/config.json'
	}
	if (!fs.existsSync(config.tracksDir)) {
		throw `Incorrect "tracksDir" in store/config.json\n${config.tracksDir} does not exists`
	}
	const port = Number.parseInt( config.port , DECIMAL_BASE )
	if (isNaN(port)) {
		throw `config.port (${config.port}) must be a positive integer!`
	}
	if (port < 1) {
		throw `config.port must be a positive integer`
	}
	globalAppData.tracksDir = config.tracksDir
	globalAppData.port = port
}