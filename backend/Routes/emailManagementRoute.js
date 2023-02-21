const express = require('express');
const Router = express.Router();

const {sendEmailAgent} = require('../Controller/emailManagementController');

Router.post('/sendEmailAgent',sendEmailAgent);

module.exports = Router;