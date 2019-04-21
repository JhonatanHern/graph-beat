const fs = require('fs').promises

const globalAppData = require('./globalAppData')

class Metadata{
	static getArtists(){
		return new Promise( async (succ,err) => {
			let data
			try{
				data = await fs.readdir(globalAppData.tracksDir)
			}catch(fileError){
				console.log("file error: ",fileError)
				err(fileError)
				return
			}
			succ(data.map(str=>({title:str})))
		})
	}
	static getSongs(args){
		return new Promise(async (succ,err)=>{
			let data
			const artist = Metadata.cleanInput(args.artist)
			const dir = globalAppData.tracksDir + '/' + artist
			try{
				data = await fs.readdir(dir)
			}catch(fileError){
				console.log("file error: ",fileError)
				err(fileError)
				return
			}
			const promises = data.map(entry=>{
				return new Promise(async (succ,err)=>{
					const isdir = (await fs.lstat(dir+'/'+entry)).isDirectory()
					succ( isdir ? entry : false )
				})
			})
			let values = await Promise.all(promises)
			values = values.filter(v=>v).map(v=>({title:v,songs:[]}))
			const albumDataPromises = values.map(v=>Metadata.getSongsFromAlbum(v.title,artist,v.songs))
			await Promise.all(albumDataPromises)
			values.push({
				title:"singles",
				songs:data.filter(file=>/\.mp3$/.test(file)).map(s=>({title:s}))
			})
			values = values.filter(album=>(album.songs.length>0))//filter empty albums
			succ(values)
		})
	}
	static getSongsFromAlbum(albumName,artist,arrayToPush){
		return new Promise(async (succ,err)=>{
			let songs = await fs.readdir(`${globalAppData.tracksDir}/${artist}/${albumName}`)
			songs = songs.filter(file=>/\.mp3$/.test(file))
			songs.forEach(s=>arrayToPush.push({title:s}))
			succ()
		})
	}
	static cleanInput(input){
		return input.split('/').join('')
	}
}

module.exports = Metadata