const urls = {
  coins:`https://api.coincap.io/v2/assets`,
  baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`
};

const convert = async (usd) => {
  try {
   const result = await fetch(urls.baseUrl)
    .then((response) => response.json())
    .then((data) => data.usd.brl);
    return result * usd;
  }
  catch (error) {
    console.log(error)
  }
};

const append = async (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const getUl = document.getElementById('coins-list');
    const criaLi = document.createElement('li');
    const pricebr = await convert(arr[i].priceUsd);
    criaLi.innerText = `${arr[i].name} (${arr[i].symbol}): ${pricebr.toFixed(2)}`
    getUl.appendChild(criaLi);
  };
};

const cryptoMoedas = async () => {
  try {
    await fetch(urls.coins)
    .then((response) => response.json())
    .then((data) => append(data.data.filter((coin) => coin.rank <= 10)))
  } catch (error) {
    console.log(error)
  } 
};

window.onload = cryptoMoedas;
