import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

// describe('testing clicks', () => {
//   beforeEach(cleanup);
//   test('the page should has a button and a text 0', () => {
//     renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
//     const buttonAdicionar = screen.queryByText('Clique aqui');

//     expect(buttonAdicionar).toBeInTheDocument();
//     expect(screen.getByText('5')).toBeInTheDocument();
//   });
// });

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />, {initialState: { clickReducer: { counter: 10 } }});
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});



