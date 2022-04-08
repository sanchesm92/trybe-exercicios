import React from 'react';
import { useState } from 'react/cjs/react.development';
import useArray from './useArray';

export default function App() {
  const [text, setText] = useState('')
  const [list, addItensList] = useArray()

  return (
    <div>
      <label htmlFor='input'>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text} id='input' ></input>
      </label>
      <button onClick={() => addItensList(text)} >save</button>
      {list.map((i) => <p>{i}</p>)}
    </div>);
}
