const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')

const metadata = require('./modules/metadata')
const globalAppData = require('./modules/globalAppData')
require('./modules/configInit')()//initialize app

// GraphQL schema
const schema = buildSchema(require('./modules/schema'))
// graphql exposed functions
const root = {
    getArtists: metadata.getArtists,
    getSongs: metadata.getSongs
}
// Create an express server and a GraphQL endpoint
const app = express()
app.use(express.static('public'))

app.use('/graphql',express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(globalAppData.port, () => {
    console.log(`Express + GraphQL Server Now Running On localhost:${globalAppData.port}/`)
})