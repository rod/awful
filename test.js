import test from 'ava';
import fn from './';

test('cli > awful returns a word', t => {
  t.true(fn().length > 0);
});

test('cli > awful.words returns array of words', t => {
  t.true(Array.isArray(fn.words));
});
