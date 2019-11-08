"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    duration: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    actors: {
        type: String,
    },
    file: {
        type: String
    },
    image: {
        type: String
    },
    synopsis: {
        type:String
    }

});

const Movies = mongoose.model('movies', moviesSchema);

module.exports = Movies;
