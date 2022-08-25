
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] =useState(0);
  const [num, setNum] = useState(0);

  const increase = () =>{
    setCount(count +1 ); 
  };
  const decrease = () => {
    setCount( count - 1);
  }
  function increaseby(){
    setCount(num + count);
  }
  


  return (
    <div className="App">
    <button class="increase" onClick={increase}>Increase by 1</button>
    <button class="decrease"onClick={decrease}>Decrease by 1</button>
    <div>
      <button class="increaseby" onClick={increaseby}>Increase by </button>
      <input type="number"  onChange={e => setNum(+e.target.value) } />
    </div>
    <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
