"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var connect_1 = require("./connect");
var app = express();
var port = 8080;
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(routes_1["default"])
    .listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
var db = 'mongodb://mongodb:27017/demo';
(0, connect_1["default"])({ db: db });
