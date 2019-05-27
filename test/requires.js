const test = require('tape');

test('all entry points parse', function testAllEntries(t) {
  t.doesNotThrow(function testMain() {
    return require('..');
  }, 'index does not throw');

  t.end();
});
