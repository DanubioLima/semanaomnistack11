const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfileOngController');
const SessionController = require('./controllers/SessionController');


routes.post('/session', SessionController.create)
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile',ProfileOngController.index);


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete );

module.exports = routes;