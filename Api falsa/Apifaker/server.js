const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker')

class Usuario {
    constructor (){
        this.id = faker.datatype.uuid();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono = faker.phone.number();
        this.email =faker.internet.email() ;
        this.contraseña = faker.internet.password();
    }
}

class Empresa {
    constructor(){
        this.id = faker.datatype.uuid();
        this.nombre =faker.company.bs();
        this.direccion = {
            calle: faker.address.street(),
            ciudad: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
            
    }
}

app.get("/api/users/new", (req, res) => {
    const user = new Usuario();
    res.json({ UsuarioNuevo: user });
});


app.get("/api/companies/new", (req, res) => {
    const empresa = new Empresa ();
    res.json({ CompañiaNueva: empresa });
});


app.get("/api/user/company", (req, res) => {
    const empresa = new Empresa ();
    const user = new Usuario();
    res.json({ CompañiaNueva: empresa, user });
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );

