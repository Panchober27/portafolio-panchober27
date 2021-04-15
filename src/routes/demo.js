const express = require('express');
const router = express.Router();

router.get('/newroute', (req,res) => {
   res.send('hola desde la nueva ruta creada con vim :)');
});


module.exports = router;
