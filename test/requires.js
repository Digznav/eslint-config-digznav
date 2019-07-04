const test = require('tape');

test('all entry points parse', function testAllEntries(t) {
  t.doesNotThrow(function testMain() {
    // eslint-disable-next-line global-require
    return require('..');
  }, 'index does not throw');

  t.end();
});
