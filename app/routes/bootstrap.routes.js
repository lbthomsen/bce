/* 
 * Bootstrap Routes
 */

var bootstrap = require('../../app/controllers/bootstrap.controller');

module.exports = function(app) {

    app.route("/api/bootstrap.css")
        .get(bootstrap.getCss);

};

/* 
 * vim: ts=4 et autoindent nowrap
 */