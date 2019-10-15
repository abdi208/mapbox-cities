const express = require('express');
const router = express.Router();

router.get('/search', function (req, res) {
  res.render('cities/search');
});

router.get('/results', function (req, res) {
  res.render('cities/results');
});

module.exports = router;