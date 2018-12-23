/* 
 * Email Routes
 */

var email = require('../../app/controllers/email.controller');

module.exports = function(app) {

    app.route("/api/email")
        .post(email.post);
    
};

/* 
 * vim: ts=4 et autoindent nowrap
 */