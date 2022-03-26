/**
 * This template allows anyone to create a completely async server in node (sync things will still work as expected but everything can accept a promise)
 */
(async () => {
  //Globals
  require('dotenv').config();
  const express = require('express');
  const http = require('http');
  const PORT = process.env.PORT || 3000; //If .env doesn't exist
  
  //App
  const app = express();

  //Middleware
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  //Routes
  app.get('/', async (req, res) => {});
  app.get('*', async (req,res) => {res.status(404).json({msg: "Err not found"})});

  //Listener
  http.createServer(app).listen(PORT);
})()