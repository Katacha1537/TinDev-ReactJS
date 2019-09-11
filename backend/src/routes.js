const express = require('express');
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DisLikeControllers = require("./controllers/DislikeControllers");

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DisLikeControllers.store);

module.exports = routes;