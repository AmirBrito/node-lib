import chalk from 'chalk';
import * as fs from 'fs';

function getLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const linksResult = [];
  let temp;
  
  while(( temp = regex.exec(text)) != null) {
      linksResult.push({ [temp[1]]: temp[2] });
  }
  return linksResult;
}

function handleError(error) {
  throw new Error(chalk.yellow(error))
}

export default async function getArchive(pathArchive) {
  try {
    const encoding = 'utf-8';
    const text =  await fs.promises.readFile(pathArchive, encoding)
    console.log(getLinks(text));
  } catch (e) {
    handleError(e)
  }
}