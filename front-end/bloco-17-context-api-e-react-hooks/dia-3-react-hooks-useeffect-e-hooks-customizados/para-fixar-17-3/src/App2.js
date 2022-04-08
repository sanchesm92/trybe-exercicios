
import './App.css';
import useTimer from './useTimer';

function App() {
const [number, verify, timer] = useTimer()
  return (
    <div>
      <p>{number}</p>
      <p>{verify}</p>
      <p>{timer}</p>
    </div>
  );
}

export default App;
