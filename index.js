import chalk from 'chalk';
import * as fs from 'fs';

function getArchive(pathArchive) {
  const encoding = 'utf-8';
  fs.readFile(pathArchive, encoding, (_, text) => {
    console.log(chalk.green(text));
  })
}

getArchive('./archives/textLink.md');