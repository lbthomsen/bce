/* 
 * Development environment
 */

var package = require("../../package.json");
var settings = require("../../settings.js");

var jwtTokenLifetime = 86400; // 24 hours

module.exports = {
    server: {
        version: package.version,
        httpPort: settings.port,
        debug: settings.debug, 
        publicHtml: "./pub/", 
        db: settings.db, 
        jwtSecret: "jwtIsAwesome", 
        jwtTokenLifetime: jwtTokenLifetime, 
        theme: settings.theme, 
        ipfsNodes: settings.ipfsNodes, 
        costPerByteDay: settings.costPerByteDay
    },
    client: {
        name: package.name, 
        version: package.version, 
        copyright: "Copyright (c) 2018 ipfs-pin.com", 
        jwtRefresh: jwtTokenLifetime / 10
    }
};

/*
 * vim: ts=4 et nowrap autoindent
 */
