const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    
    title: {
        type: String,   
        required: [true, 'Debe ingresar el titulo'],
        minlength: [2, 'No puede tener menos de 3 caracteres']

    },
    price: {
            type: Number,
            required: [true, 'Debe tener un valor'],
            min: [1, 'No puede tener un valor inferior a $1']
    
    },

    description: {
        type: String,
        required: [true, 'Debe ingresar una descripcion'],
        minlength: [2, 'No puede tener menos de 3 caracteres']

    }
    
    
});

const Producto = mongoose.model("Producto", ProductSchema);

module.exports = Producto;