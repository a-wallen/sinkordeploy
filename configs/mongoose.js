"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var ADMINS = {
    wallenstephe: "WMNUeZvP8zL8VIP0",
    ssheikh: "0sZvkQhy40adwPxk",
    outcaltk: "4NwFs2HdBRPIMbyY",
    larsonlaura: "nX0oolK6ReQ5X9Eu"
};
// SET YOUR THIS VARIABLE TO YOUR USERNAME
var dev_usr = 'wallenstephe';
var uri = "mongodb://" + dev_usr + ':' + ADMINS[dev_usr] + "@soscluster-shard-00-00.0r8jh.mongodb.net:27017,soscluster-shard-00-01.0r8jh.mongodb.net:27017,soscluster-shard-00-02.0r8jh.mongodb.net:27017/test?ssl=true&replicaSet=atlas-hmsogf-shard-0&authSource=admin&retryWrites=true&w=majority";
var MONGO_USERNAME = process.env.MONGO_USERNAME || dev_usr;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || ADMINS[dev_usr];
var MONGO_HOST_URL = process.env.MONGO_URL || uri;
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
var MONGO = {
    host: MONGO_HOST_URL,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS
};
exports["default"] = MONGO;
