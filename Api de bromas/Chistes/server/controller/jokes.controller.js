const Jokes = require("../models/jokes.model.js");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ jokes : allJokes}))
        .catch(err => res.json ({ message: "Estos no son chistes", error: err}));
};

module.exports.findOneJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id})
    .then(oneSingleJoker => res.json ({ jokes: oneSingleJoker}))
    .catch(err => res.json({message: "Este no es un chiste", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
    .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke}))
    .catch(err => res.json({ message: "No se creo el chiste", error: err}));
};

module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true})
    .then(updateJoke => res.json({ joke: updateJoke}))
    .catch(err => res.json({ message: "No se actualizo el chiste", error: err}));
};

module.exports.deleteExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Chiste Borrado", error: err})); 
};