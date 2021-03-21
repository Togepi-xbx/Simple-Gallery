const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../view/pages/gallery', {pageTitle: "Gallery"});
})

module.exports = router;


