/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-datepicker',
  included: function(app) {
    this._super.included(app);

    app.import('node_modules/moment/moment.js');
    app.import('node_modules/pikaday/pikaday.js');
    app.import('node_modules/pikaday/css/pikaday.css');
  }
};
