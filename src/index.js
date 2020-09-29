const express = require('express');
const config = require('./server/config')
const app = config(express());

// starting server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});