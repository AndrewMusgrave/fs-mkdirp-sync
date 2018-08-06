const {mkdirSync: fsMkdirSync} = require('fs');
const {sep, join} = require('path');

const mkdir = (dir) => {
  try {
    fsMkdirSync(dir);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
};

const mkdirSync = (dir) => {
  if (typeof dir !== 'string') {
    return;
  }

  const paths = dir.split(sep);

  for (let i = 1, length = paths.length; i <= length; i++) {
    mkdir(join(...paths.slice(0, i)));
  }
}

module.exports = mkdirSync;