const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: String,
    artists: String,
    danceability: Number,
    energy: Number,
    key: Number,
    loudness: Number,
    mode: Number,
    speechiness: Number,
    acousticness: Number,
    instrumentalness: Number,
    liveness: Number,
    valence: Number,
    tempo: Number,
    duration_ms: Number,
    time_signature: Number,
    rank: Number
})

var song = mongoose.model('song',songSchema)

module.exports = song