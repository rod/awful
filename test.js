import test from 'ava';
import x from './';

test('awful array should have length greater than zero', t => {
  t.true(x.all.length > 0);
});

test('should only return index of words defined in awful array', t => {
  t.true(x.all.indexOf('awful') !== -1);
  t.true(x.all.indexOf('amazing') === -1);
});

test('.random() method should return a word', t => {
  t.truthy(x.random());
});
