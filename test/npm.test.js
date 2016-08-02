'use strict';

const npm = require('../lib');
const chai = require('chai');
const should = chai.should();
const npmConfig = {
  loglevel: 'silent'
};

describe('NPM promisify test', () => {
  it('should return promisified commands', (done) => {
    npm.loadAsync(npmConfig).then(() => {
      return npm.commands.lsAsync('', true).then((data) => {
        Object.keys(data).length.should.be.above(0);
        data.name.should.be.equal('promisified-npm');
        done();
      });
    }, done).catch(done);
  });
});
