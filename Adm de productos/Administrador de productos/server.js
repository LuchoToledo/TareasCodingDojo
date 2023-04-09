const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config.js');

const ProductsRoute = require('./server/routes/adm.routes');

ProductsRoute(app);

app.listen(port, () => console.log("Im in production my friend!"))