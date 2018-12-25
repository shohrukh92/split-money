const express = require('express');
const middlewares = require('./middlewares');

// Mongo db imports/configs
const dbConfig = require('./db.config');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const MONGO_LAB_DB_URL = dbConfig.config.mongo_uri;


const APP_PORT = process.env.PORT || 3500;
const app = express();

MongoClient.connect(MONGO_LAB_DB_URL, (dbError, database) => {
  if (dbError) {
    console.log(dbError);
    return;
  }
  console.log('connected to db ' + MONGO_LAB_DB_URL);

  middlewares.setAppUseConfigs(app);
  app.get('/workspaces', (req, res) => {
    database.collection('workspaces').find({}).toArray((err, data) => {
      if (err) {
        // TODO handle error case and send response
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  app.listen(APP_PORT);
});

