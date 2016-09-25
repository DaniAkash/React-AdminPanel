const express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('dist'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 3000);
