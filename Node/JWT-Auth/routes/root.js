const express = require('express');
const route = express.Router();
const path = require('path');
const dirname = require('path').dirname;
const PORT = process.env.PORT || 3500;

route.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..','public','views', 'index.html'));
});

route.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public','views', 'new-page.html'));
});

route.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

module.exports = route;