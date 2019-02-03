import test from 'ava';
import execa from 'execa';
import awful from '.';

// API
test('api', t => {
  t.true(awful.random().length > 0);
  t.true(Array.isArray(awful.all));
  t.true(awful.all[3].length > 0);
});

// CLI

test('cli', async t => {
  const {stdout} = await execa('./cli.js');
  t.true(stdout.length > 0);
});
