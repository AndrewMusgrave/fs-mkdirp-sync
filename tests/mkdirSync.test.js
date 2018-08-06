const readdirSync = require('readdir-sync-recursive');
const rimraf = require('rimraf');
const mkdirSync = require('../');

describe('mkdirSync', () => {
  afterEach(() => {
    rimraf.sync('tests\\a');
  });

  it('will create all the directories', () => {
    mkdirSync('tests\\a\\b\\c\\d');
    const dirs = readdirSync('tests');
    expect(dirs).toEqual([
      'tests\\a',
      'tests\\a\\b',
      'tests\\a\\b\\c',
      'tests\\a\\b\\c\\d',
    ]);
  });

  it('will not crash when the argument is undefined', () => {
    expect(() => mkdirSync()).not.toThrow();
  })

  it('will not crash when the argument is null', () => {
    expect(() => mkdirSync(null)).not.toThrow();
  })
});
