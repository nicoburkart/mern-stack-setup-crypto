"use strict";
exports.__esModule = true;
var express = require("express");
var demo_routes_1 = require("./demo-routes");
var router = express.Router();
router.use('/api/v1/demo', demo_routes_1["default"]);
exports["default"] = router;
