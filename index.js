const {mkdirSync} = require('fs');
const {sep, join} = require('path');

const mkdir = (dir) => {
  try {
    mkdirSync(dir);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
};

const mkdirpSync = (dir) => {
  if (typeof dir !== 'string') {
    return;
  }

  const paths = dir.split(sep);

  for (let i = 1, length = paths.length; i <= length; i++) {
    mkdir(join(...paths.slice(0, i)));
  }
}

module.exports = mkdirpSync;