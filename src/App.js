import './App.css';
import { useState } from 'react';


function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.value);
    
    if (result.slice(0, 1) === '=') {
      setResult(e.target.value);
    }else if(result === 'Error'){
      setResult(e.target.value);
    }
  }

  const handleTyping = (e) => {
    setResult(e.target.value);
  }

  const del = () => {
    setResult(result.slice(0, -1));
  }

  const clear = () => {
    setResult('');
  }

  const calculate = () => {
    try {
      if(result != 'Error'){
        setResult('= ' + eval(result).toString());        
      }
    } catch (error) {
      setResult('Error');
    }
   
  }

  return (
    <div className='container'>
      <form action=''>
        <input type='text' value={result} onChange={handleTyping} />
      </form>

      <div className='keypad' >
      <button className='highlight' onClick={clear} id='clear' >Clear</button>
      <button className='highlight' onClick={del} id='del' >Del</button>
      <button className='highlight' onClick={handleClick} value='/'>&divide;</button>
      <button onClick={handleClick} value='7'>7</button>
      <button onClick={handleClick} value='8'>8</button>
      <button onClick={handleClick} value='9'>9</button>
      <button className='highlight' onClick={handleClick} value='*'>&times;</button>
      <button onClick={handleClick} value='4'>4</button>
      <button onClick={handleClick} value='5'>5</button>
      <button onClick={handleClick} value='6'>6</button>
      <button className='highlight' onClick={handleClick} value='-'>&ndash;</button>
      <button onClick={handleClick} value='1'>1</button>
      <button onClick={handleClick} value='2'>2</button>
      <button onClick={handleClick} value='3'>3</button>
      <button className='highlight' onClick={handleClick} value='+'>+</button>
      <button onClick={handleClick} value='0'>0</button>
      <button onClick={handleClick} value='.'>.</button>
      <button className='highlight' onClick={calculate} id='result' >=</button>
      </div>     
    </div>
  );
}

export default App;
