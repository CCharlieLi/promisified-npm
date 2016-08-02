'use strict';

const npm = require('../lib');
const chai = require('chai');
const should = chai.should();
const npmConfig = {
  loglevel: 'silent'
};

describe('NPM promisify test', () => {
  it('should return list packages info', (done) => {
    npm.loadAsync(npmConfig).then(() => {
      return npm.commands.lsAsync('', true).then((data) => {
        Object.keys(data).length.should.be.above(0);
        data.name.should.be.equal('promisified-npm');
        done();
      });
    }, done).catch(done);
  });

  it('should return outdated package info', (done) => {
    npm.loadAsync(npmConfig).then(() => {
      return npm.commands.outdatedAsync('', true).then((data) => {
        data.length.should.be.above(0);
        done();
      });
    }, done).catch(done);
  });

  it('should return view package info', (done) => {
    npm.loadAsync(npmConfig).then(() => {
      return npm.commands.viewAsync(['jscs'], true).then((data) => {
        Object.keys(data[Object.keys(data)[0]]).length.should.be.above(0);
        done();
      });
    }, done).catch(done);
  });

  it('should return install package info', function (done) {
    this.timeout(180000);
    npm.loadAsync(npmConfig).then(() => {
      return npm.commands.installAsync('.', ['jscs@3.0.0']).then((data) => {
        data.length.should.be.above(0);
        done();
      });
    }, done).catch(done);
  });
});
