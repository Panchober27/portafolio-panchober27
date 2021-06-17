const express = require('express');
const router = express.Router();

router.get('/newroute', (req,res) => {
   res.send('hola desde la nueva ruta creada con vim :)');
});


router.get('/juju', (req,res) => {
   res.send('hola compare');
});


router.get('/pipi', (req,res) => {
   res.send('Hola desde la ruta antigua aqui en demos');
});

module.exports = router;
