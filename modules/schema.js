module.exports = `
    type Query {
        getArtists(): [Artist!]
        getSongs(artist: String!): [Album!]
    },
    type Artist {
        title: String!
    },
    type Album {
        title: String!
        songs:[Song!]!
    },
    type Song {
        title: String!
    }
`