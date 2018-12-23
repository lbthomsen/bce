/*
 * Bootstrap Controller
 */

var fs = require("fs-extra");
var sass = require("node-sass");

var config = require("../../config/config");

var css = null;

exports.getCss = function (req, res) {

    if (!css) {

        try {

            fs.readFile("node_modules/bootstrap/scss/bootstrap.scss", function (err, data) {
                if (err) {
                    res.status(500).send({err: err});
                } else {
                    // console.log("File read: %j", data.toString());
                    var dataString = "";

                    Object.keys(config.server.settings.theme).forEach(function (key) {
                        if (typeof config.server.settings.theme[key] === "string") {
                            dataString += key + ":" + config.server.settings.theme[key];
                        }
                    });
                    
                    dataString += data.toString();
                    
                    (config.server.debug && console.log("dataString: %j", dataString));
                    
                    var sassOptions = {
                        data: dataString,
                        includePaths: [
                            "node_modules/bootstrap/scss/"
                        ],
                        sourceComments: false
                    };
                    
                    if (!config.server.debug) 
                        sassOptions.outputStyle = "compressed";

                    sass.render(sassOptions, function (err, result) {
                        if (err) {
                            res.status(500).send({err: err});
                        } else {
                            css = result.css.toString();
                            res.set("Content-Type", "text/css");
                            res.send(css);
                        }
                    });

                }
            });
        } catch (err) {
            res.status(500).send({err: err});
        }

    } else {
        res.set("Content-Type", "text/css");
        res.send(css);
    }

};

/*
 * vim: ts=4 et autoindent
 */