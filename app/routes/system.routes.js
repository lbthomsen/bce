/* 
 * System Routes
 */

var system = require('../../app/controllers/system.controller');

module.exports = function(app) {

    app.route("/api/system")
        .get(system.get);
    
};

/* 
 * vim: ts=4 et autoindent nowrap
 */