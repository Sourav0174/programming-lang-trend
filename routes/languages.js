const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/languages.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read language data' });
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;