const fs = require('fs').promises;

const allNames = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then((r) => JSON.parse(r))
  .then((d) => d.map(({id, name}) => `${id} - ${name}`
  ))
  .then((s) => s.forEach((txt) => console.log(txt)))
}

const getCharacterById = async (id) => {
  const result = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r))
  const findItem = result.find((item) => item.id === id)
    if (!findItem)  throw new Error('id não encontrado')
  return console.log(findItem)
}

const replaceSimpsons = async () => {
  const result = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r))
  const newResult = result.filter(({id}) => id !== '10' && id !== '6')
  await fs.writeFile('./simpsons.json', JSON.stringify(newResult));
}

const createNewSimpsonsFamily = async () => {
  const result = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r))
  const newResult = result.filter(({id}) => Number(id) < 5)
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newResult));
}

const addItemInSimpsonsFamily = async () => {
  const result = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r))
  const newResult = result.filter(({id}) => Number(id) < 5)
  newResult.push({ "id": "8","name": "Nelson Muntz" })
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newResult));
}

const replaceNelsonToMaggie = async () => {
  const result = await fs.readFile('./simpsonsFamily.json', 'utf-8').then((r) => JSON.parse(r))
  const objNelson = result.find(({name}) => name === 'Nelson Muntz' )
  const newResult = result.filter(({name}) => name !== 'Nelson Muntz')
  const newObj = {
    id: objNelson.id,
    name: 'Maggie Simpson'
  }
  newResult.push(newObj)
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newResult));
}

const writeMultiplesFiles = () => {
  const strArr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const arr = [];
  strArr.forEach((i,index) => {
    const call = fs.writeFile(`./file${index + 1}.txt`, i);
    arr.push(call)
  })
  Promise.all(arr)
}

const createFileAll = async () => {
  const arrFilesName = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ]
  const result = await Promise.all(
    arrFilesName.map((i) => fs.readFile(i, 'utf-8'))
  )
  const answer = result.join(' ');
  fs.writeFile(`./fileAll.txt`, answer);
}
createFileAll()