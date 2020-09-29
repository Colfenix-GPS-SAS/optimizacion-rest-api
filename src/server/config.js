const cors = require('cors');
const express = require('express')
const routes = require('../routes/modules')
const morgan = require('morgan')


module.exports = (app) => {
  // Settings
  app.set("port", process.env.PORT || 4000);

  // Middlewares
  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'))

  // Routes
  routes(app)

  return app;
};
