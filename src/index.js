const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Dự án Xử Lý Hợp Đồng Thông Minh!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
