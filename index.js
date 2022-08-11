import chalk from 'chalk';
import * as fs from 'fs';

function handleError(error) {
  throw new Error(chalk.yellow(error))
}

function getArchive(pathArchive) {
  const encoding = 'utf-8';
  fs.readFile(pathArchive, encoding, (error, text) => {
    if (error) handleError(error);
    console.log(chalk.green(text));
  })
}

getArchive('./archives/textLink.md');