const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: (state.index === state.colors.length -1) ? 0 : state.index + 1,
      }
    case 'PREVIOUS_COLOR' :
      return {
        ...state,
        index: (state.index === 0) ? state.colors.length -1 : state.index - 1,
      }
      case 'RANDOM' :
      return {
        index: state.colors.length,
        colors: [...state.colors, generateRandomColor()]
      }
    default:
    return state;
  }
};

const store = Redux.createStore(reducer);

const getNext = document.getElementById('next');
const getPrevious = document.getElementById('previous');

getNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' })
})
getPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
})

store.subscribe(() => {
  const { colors, index } = store.getState();
  const getValue = document.getElementById('value');
  const getContainer = document.getElementById('container');
  getValue.innerHTML = colors[index];
  getContainer.style.backgroundColor = colors[index];
})

// retirado ideia do site https://css-tricks.com/snippets/javascript/random-hex-color/
const generateRandomColor = () => {
  const random = Math.floor(Math.random()*16777215).toString(16);
  return `#${random}`
}

// function generateRandomColor() {
//   const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//   let cor = '#';
//   const aleatorio = () => Math.floor(Math.random() * oneChar.length);
//   for (let i = 0; i < 6; i += 1) {
//       cor += oneChar[aleatorio()];
//   }
//   return cor;
// }

const getRandom = document.getElementById('random');
getRandom.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM' })
})

