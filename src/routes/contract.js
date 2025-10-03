const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Danh sách hợp đồng thông minh');
});

module.exports = router;
