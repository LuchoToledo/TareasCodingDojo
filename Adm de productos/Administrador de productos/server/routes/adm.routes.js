const ProductController = require("../controllers/adm.controller.js");

module.exports = app => {
    app.get("/api/productos/", ProductController.findAllPro);
    app.get("/api/productos/:id", ProductController.findOnePro);
    app.put("/api/productos/update/:id", ProductController.updateExistingPro);
    app.post("/api/productos/new", ProductController.createNewPro);
    app.delete("/api/productos/delete/:id", ProductController.deleteExistingPro);
}
