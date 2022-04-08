const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 100)
}

const transformUpperCase = (string) => {
  return string.toUpperCase();
}

const firstCharacter = (string) => {
  return string[0]
}

const concatString = (firstString, secondString) => {
  return `${firstString} ${secondString}`
}

const dogs = () => {
    const result = fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => data)
      return result;
}

module.exports = { dogs, generateRandomNumber, transformUpperCase, firstCharacter, concatString };