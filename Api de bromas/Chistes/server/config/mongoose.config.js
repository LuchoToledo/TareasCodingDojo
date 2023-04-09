const  mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/chistes_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=> console.log('Conexion Establecida'))
        .catch(err => console.log('Te fregaste conchetumare', err));



