// Archivo de rutas para la vista de las app moviles y su subvistas.
// hago este archivo para no tener todo el codigo en index.js jejejeje😋😋
const express = require("express");
const router = express.Router();

// Ruta principal de la pagina de las demos de Aplicaiones Moviles.
router.get("/mov-apps", (req, res) => {
  res.render("movil-app");
});

module.exports = router;
