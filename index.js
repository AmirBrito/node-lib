import chalk from 'chalk';
import * as fs from 'fs';

function handleError(error) {
  throw new Error(chalk.yellow(error))
}

async function getArchive(pathArchive) {
  const encoding = 'utf-8';
  const text =  await fs.promises.readFile(pathArchive, encoding)
  console.log(chalk.blue(text))
}

getArchive('./archives/textLink.md');
