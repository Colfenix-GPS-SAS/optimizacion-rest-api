const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares


// Routes


// Server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});