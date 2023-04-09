const mongoose = require("mongoose");

const esquemaJokes = new mongoose.Schema({
    joke: String,
    
});

const Joke = mongoose.model("Joke", esquemaJokes);

module.exports = Joke;