'use strict';

const debug = require('debug')('pnpm:promisifier');
const Promise = require('bluebird');

const promisifier = (commands, name) => {
  commands[name + 'Async'] = function () {
    var args = [].slice.call(arguments);
    var self = this;
    return new Promise(function (resolve, reject) {
      args.push(function (err, results) {
        if (err) { reject(err); }
        resolve(results);
      });
      return commands[name].apply(self, args);
    });
  };
};

module.exports = (commands) => {
  Object.keys(commands).forEach((name) => {
    debug('promisify command:' + name);
    promisifier(commands, name);
  });
};

