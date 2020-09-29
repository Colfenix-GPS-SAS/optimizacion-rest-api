const controller = require('../controllers/ctrl')

module.exports = app => {
    app.get('/modules', controller.modules)
    app.get('/modules/:id', controller.moduleById)
    app.post('/modules', controller.postModules)
}
