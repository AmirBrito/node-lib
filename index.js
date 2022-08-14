import chalk from 'chalk';
import * as fs from 'fs';

const text = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function getLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const extractedLink = text.match(regex);
  console.log(extractedLink);
}

getLinks(text);

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
