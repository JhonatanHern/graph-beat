const fs = require('fs'),
	{ promisify } = require('util'),
	express = require('express')

const globalAppData = require('./globalAppData')
const asyncStat = promisify(fs.stat)

const router = express.Router()
router.use(function( _ , _ , next ){next()})
router.get('/', async function(req, res) {
	if (!req.query.artist||!req.query.song||!req.query.album) {
		res.writeHead(404,{'Content-Type':'audio/mpeg'})
		res.end()
		return
	}
	const artist = req.query.artist,
		album  = req.query.album,
		name   = req.query.song
	let path
	if (album==="singles") {
		path = globalAppData.tracksDir+'/'+artist+'/'+name
	} else {
		path = globalAppData.tracksDir+'/'+artist+'/'+album+'/'+name
	}
	const stat = await asyncStat(path)
	const fileSize = stat.size
	const range = req.headers.range
	if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1] 
			? parseInt(parts[1], 10)
			: fileSize-1
		const chunksize = (end-start)+1
		const file = fs.createReadStream(path, {start, end})
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'audio/mpeg',
		}
		res.writeHead(206, head);
		file.pipe(res);
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'audio/mpeg',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}
});

module.exports = router