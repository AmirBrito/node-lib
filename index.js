import chalk from 'chalk';

console.log(chalk.blue('start!'));

const paragraph = 'text returned by a function';

function text(string) {
  return string;
}

console.log(text(paragraph));