;/*
 * Express server
 */

var config = require('./config'),
    express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser'), 
    ws = require("express-ws");

module.exports = function (nodeType) {

    var app = express();
    
    ws(app); // Enable ws

    app.use(compression());

    app.use(bodyParser.urlencoded({
        extended: true, 
        limit: "10MB"
    }));
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.enable('trust proxy');

    var allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Content-Type');
        next();
    };

    app.use(allowCrossDomain);

    require('../app/routes/bootstrap.routes.js')(app);
    require('../app/routes/system.routes.js')(app);
    require('../app/routes/email.routes.js')(app);

    app.use(express.static(config.server.settings.publicHtml));

    app.get('/*', function (req, res) {
        res.sendFile('index.html', {root: config.server.settings.publicHtml});
    });

    return app;
};

/* 
 * vim: ts=4 et autoindent
 */