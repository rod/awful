const argv = require('minimist')(process.argv.slice(2));

if (argv.help === true ) {
  const help = '
    Examples
      $ awful
      miserable

      $ awful --all
      lousy
      miserable
      ...

    Options
      --all Get all the words instead of a random word'

  console.log(help);
}
console.dir(argv);
