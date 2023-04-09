const Producto = require("../models/adm.model.js");

module.exports.findAllPro = (req, res) => {
    Producto.find()
        .then(allProduc => res.json({ adm : allProduc}))
        .catch(err => res.json ({ message: "Esta no es la lista de productos", error: err}));
};

module.exports.findOnePro = (req, res) => {
    Producto.findOne({ _id: req.params.id})
    .then(oneSingleProduc => res.json ({ adm: oneSingleProduc}))
    .catch(err => res.json({message: "Este no es un Producto", error: err}));
};

module.exports.createNewPro = (req, res) => {
    console.log(req.body.data)
    Producto.create(req.body.data)
    .then(newlyCreatedProduc => res.json({ adm: newlyCreatedProduc}))
    .catch(err => res.json({ message: "No se creo el producto", error: err}));
};

module.exports.updateExistingPro = (req, res) => {
    Producto.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true})
    .then(updateProduc => res.json({ joke: updateProduc}))
    .catch(err => res.json({ message: "No se actualizo el producto", error: err}));
};

module.exports.deleteExistingPro = (req, res) => {
    Producto.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Producto borrado", error: err})); 
};

