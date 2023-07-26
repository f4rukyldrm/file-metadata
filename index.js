const express = require('express');
const app = express();

require('dotenv').config();
const multer = require('multer');
const upload = multer();
const PORT = process.env.PORT || 4000;

// for fcc tests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });
});

app.listen(PORT, console.log('app listening on:', PORT));