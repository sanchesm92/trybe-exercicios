import { useEffect, useState } from 'react';

export default function useTimer() {
  const [number, setNumber] = useState(0)
  const [verify, setVerify] = useState(null)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      changeNumber()  
    }, 10000)
    const novoInterval = setInterval(() => {
      setToNull()
    }, 1000);
    return () => {
      clearInterval(interval)
      clearInterval(novoInterval)
    }

  })

  const verifyNumber = (number) => {
    if(number % 3 === 0 || number % 5 === 0) {
      setVerify('Acertou')
      resetTimer()
    }
  }
  const setToNull = () => {
    if(timer >= 1 && timer <= 3) {
      setTimer(timer + 1)
    }
    if(timer === 4) {
      setTimetToNull()
      setVerify(null)
    }
  }
  const setTimetToNull = () => {
    setTimer(null)
  }
  const resetTimer = () => {
    setTimer(1)
  }

  const changeNumber = () => {
    const newNumber = Math.trunc(Math.random() * 100)
    verifyNumber(newNumber)
    setNumber(newNumber)
  }

  return [number, verify, timer];
}
