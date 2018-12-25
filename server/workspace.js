const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.json({
    a: 123,
    b: '234'
  });
  res.send('GET handler for /workspace route.');
});

router.post('/', function(req, res) {
  res.send('POST handler for /workspace route.');
});

router.put('/', function(req, res) {
  res.send('put handler for /workspace route.');
});

module.exports = router;