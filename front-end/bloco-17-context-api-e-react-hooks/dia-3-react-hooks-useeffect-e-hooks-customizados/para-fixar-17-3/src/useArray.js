import { useState } from 'react/cjs/react.development';

export default function useArray() {
  const [list, setList] = useState([])

  const addItensList = (item) => {
    setList(list.concat(item))
  }
  return [list, addItensList];
}
