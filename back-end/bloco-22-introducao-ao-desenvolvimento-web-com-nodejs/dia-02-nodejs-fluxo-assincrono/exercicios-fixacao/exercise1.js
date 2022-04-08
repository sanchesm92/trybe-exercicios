const myFunction = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'))
    const result = (a + b) * c
    if (result < 50) {
      return reject(new Error('Valor muito baixo'))
    } 
    resolve(result)
  })
}

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100 + 1);
// }
// function arrRandomNumbers() {
//   return Array.from({ length: 3 }).map(getRandomNumber);
// }

// myFunction(...arrRandomNumbers())
// .then(resolve => console.log(resolve))
// .catch(err => console.log(err))


function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
function arrRandomNumbers() {
  return Array.from({ length: 3 }).map(getRandomNumber);
}

const resultado = async () => {
  try {
    const result = await myFunction(...arrRandomNumbers())
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

resultado()

