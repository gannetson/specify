/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import(app.bowerDirectory + '/modernizr/modernizr.js');
app.import(app.bowerDirectory + '/foundation/js/foundation.min.js');
app.import(app.bowerDirectory + '/foundation/js/foundation/foundation.clearing.js');

module.exports = app.toTree();
