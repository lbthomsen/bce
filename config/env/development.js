/* 
 * Development environment
 */

var package = require("../../package.json");
var settings = require("../../settings.js");

var jwtTokenLifetime = 86400; // 24 hours

module.exports = {
    server: {
        settings: settings, 
        package: package
    },
    client: {
        name: package.name, 
        version: package.version, 
        copyright: "Copyright (c) 2018 Lars Boegild Thomsen <lbthomsen@gmail.com"
    }
};

/*
 * vim: ts=4 et nowrap autoindent
 */