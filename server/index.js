//TODO: use separate modules and require them in this file
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const APP_PORT = process.env.PORT || 3500;
const workspaces = require('./workspace');

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

setAppUseConfigs();
app.use('/workspaces', workspaces);
app.listen(APP_PORT);

function setAppUseConfigs() {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
	});
}