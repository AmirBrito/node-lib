import chalk from 'chalk';
import * as fs from 'fs';

function handleError(error) {
  throw new Error(chalk.yellow(error))
}

async function getArchive(pathArchive) {
  try {
    const encoding = 'utf-8';
    const text =  await fs.promises.readFile(pathArchive, encoding)
    console.log(chalk.blue(text))
  } catch (e) {
    handleError(e)
  }

}

getArchive('./archives/textLink.md');
