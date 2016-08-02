# promisified-npm

[![Build Status](https://travis-ci.org/CCharlieLi/promisified-npm.svg?branch=master)](https://travis-ci.org/CCharlieLi/promisified-npm)

Pure promisified npm node module.

# Install

```
npm i promisified-npm --save
```

# Usage

```
const npm = require('promisified-npm');
const npmConfig = {
  loglevel: 'silent'
};

npm.loadAsync(npmConfig).then(() => {
  return npm.commands.lsAsync('', true).then((data) => {
    return data.
  }).catch((err) => {
	console.log(err);
  });
});
```
