/*
 * Main Server
 */

"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require("./config/config"),
    express = require("./config/express");

var argv = process.argv.slice(2);

var app = express(argv[0] || "slave");

if (argv[0] === 'master') {
//    var housekeeping = require("./app/housekeeping")(ipfsConnections);
//    var add = require("./app/add")(ipfsConnections);
//    var remove = require("./app/remove")(ipfsConnections);
//    var bill = require("./app/bill")(ipfsConnections);
}

app.listen(config.server.settings.httpPort);

module.exports = app;

console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.server.settings.httpPort);

/* 
 * vim: ts=4 et nowrap autoindent
 */
