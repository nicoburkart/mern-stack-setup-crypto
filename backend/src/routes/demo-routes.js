"use strict";
exports.__esModule = true;
var express = require("express");
var demo_controller_1 = require("../controllers/demo-controller");
var router = express.Router();
router.get('/', demo_controller_1["default"].getHello);
exports["default"] = router;
