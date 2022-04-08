const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await question('Arquivo a ser lido:  ');
  const originalContent = await fs.readFile(fileName, 'utf-8').catch(err => {

  console.error(`Erro ao ler o arquivo: ${err}`)
  return false
  })
  if (!originalContent) return;

  const oldWord = await question('qual palavra deseja subtituir? ');
  const newWord = await question('qual a nova palavra? ')
  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord) 
  const destination = await question('onde deseja salvar? ')
  await fs.writeFile(destination, newContent)
}

start();