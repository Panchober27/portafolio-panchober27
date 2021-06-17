const express = require('express');
const router = express.Router();

router.get('/japon', (req,res) => {
  res.send('Hola desde Japon');
});

module.exports = router;

