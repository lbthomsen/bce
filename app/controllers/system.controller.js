/*
 * System Controller
 */

var config = require('../../config/config');

var sitemapCount = 10000;

exports.get = function (req, res) {
    res.json({
        success: true,
        result: config.client
    });
};

/*
 * vim: ts=4 et autoindent
 */