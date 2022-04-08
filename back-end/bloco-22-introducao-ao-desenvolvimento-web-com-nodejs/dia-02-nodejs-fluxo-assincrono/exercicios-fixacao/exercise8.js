const fs = require('fs').promises;
const readline = require('readline');


const fizzBuzz = async (number) => {
  new Promise((resolve, reject) => {
    if(number % 15 === 0) {
      console.log('FizzBuzz');
      return resolve('FizzBuzz')
    }
    if(number % 3 === 0) {
      console.log('Fizz');
      return resolve('Fizz')
    }
    if(number % 5 === 0) {
      console.log('Buzz');
      return resolve('Buzz')
    }
    reject(number)
  })
}

fizzBuzz(4)

