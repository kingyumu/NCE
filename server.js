const express = require('express');
const path = require('path');
const app = express();

// 托管当前目录下 static 文件夹静态资源
app.use(express.static(path.join(__dirname, 'static')));

// 访问根路径 / 自动返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`静态服务地址：http://localhost:${PORT}`);
});
