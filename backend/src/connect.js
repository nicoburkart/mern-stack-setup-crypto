"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
exports["default"] = (function (_a) {
    var db = _a.db;
    var connect = function () {
        mongoose
            .connect(db)
            .then(function () {
            return console.info("Successfully connected to Database");
        })["catch"](function (error) {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
    };
    connect();
    mongoose.connection.on('disconnected', connect);
});
