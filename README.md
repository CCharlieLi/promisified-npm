# promisified-npm

[![Build Status](https://travis-ci.org/CCharlieLi/promisified-npm.svg?branch=master)](https://travis-ci.org/CCharlieLi/promisified-npm)

Pure promisified `npm` node module. Use entire `npm` in a promise way.

- Compare with others:
  - npm-as-promised: Only `load` and `commands` in `npm`.
  - promisify-npm: It's a wrap of `npm command line`, it's not original `npm` at all.


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

For more usage of promisified npm, please check `test` directory.

# License

MIT
