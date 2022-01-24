// App.test.js
import React from 'react';
import {
  screen, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import renderWithRedux from './helper';
import userEvent from '@testing-library/user-event';
import fetchMock from 'fetch-mock-jest';


const mockInitialState = {
  fetchReducer: {
    data: [],
    loading: false,
    error: ''
  }
};

describe('testes react redux', () => {
  afterEach(cleanup);
it('verificar se Select category esta na tela', () => {
    renderWithRedux(
    <App />,
    { initialState: mockInitialState },
  );
    const getInitialTest = screen.getByRole('heading', {
      name: /select category/i
    })
    expect(getInitialTest).toBeInTheDocument();
});

it('testar chamada api', async () => {
  renderWithRedux(
    <App />,
    { initialState: mockInitialState },
  );
  
fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
data: {
  children: [{
    data: {
      title: 'xablau'
    }
  }]
},
});

const selectBox = screen.getByRole('combobox')
    userEvent.selectOptions(selectBox,['reactjs']);
    const loading = screen.queryByText(/Loading/)
    await waitForElementToBeRemoved( () => loading) 
    const getNewText = screen.queryByText('xablau');
    expect(getNewText).toBeInTheDocument()


})



})


// fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
// body: { message: 'myDogUrl' },
// });


// test('typing numbers', () => {
//   const { getByTestId, getByText } = renderWithRedux(
//     <App />,
//     { initialState: mockInitialState },
//   );
//   const firstField = getByTestId('input1');
//   expect(firstField).toBeInTheDocument();
//   fireEvent.change(firstField, { target: { value: 1 } });
//   const secondField = getByTestId('input2');
//   fireEvent.change(secondField, { target: { value: 6 } });
//   expect(getByText('7')).toBeInTheDocument();
//   const thirdField = getByTestId('input3');
//   fireEvent.change(thirdField, { target: { value: 12 } });
//   expect(getByText('19')).toBeInTheDocument();
// });