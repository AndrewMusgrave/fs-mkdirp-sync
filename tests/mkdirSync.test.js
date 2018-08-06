const readdirSync = require('readdir-sync-recursive');
const rimraf = require('rimraf');
const mkdirpSync = require('../');

describe('mkdirpSync', () => {
  afterEach(() => {
    rimraf.sync('tests\\a');
  });

  it('will create all the directories', () => {
    mkdirpSync('tests\\a\\b\\c\\d');
    const dirs = readdirSync('tests');
    expect(dirs).toEqual([
      'tests\\a',
      'tests\\a\\b',
      'tests\\a\\b\\c',
      'tests\\a\\b\\c\\d',
    ]);
  });

  it('will not crash when the argument is undefined', () => {
    expect(() => mkdirpSync()).not.toThrow();
  })

  it('will not crash when the argument is null', () => {
    expect(() => mkdirpSync(null)).not.toThrow();
  })
});
