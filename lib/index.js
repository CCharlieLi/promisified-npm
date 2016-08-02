'use strict';

const debug = require('debug')('pnpm:index');
const Promise = require('bluebird');
debug('promisify npm');
const npm = Promise.promisifyAll(require('npm'));
debug('promisify npm.commands');
require('./promisifier')(npm.commands);

module.exports = npm;
