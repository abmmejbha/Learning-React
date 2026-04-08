import { useState } from 'react';


function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('light');

  const appendToDisplay = (value) => {
    setDisplayValue(prevValue => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (

    <>
      <div id="calculator" className="overflow-hidden w-64 p-4 bg-gray-500 rounded-lg shadow-md">
        <input className="bg-gray-400 border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2"
          type="text" id="display" value={displayValue} readOnly />
        <button onClick={calculate} className="bg-gray-400 hover:bg-red-700 text-white font-bold px-2 rounded" cursor-pointer>Calc</button>
        <div id="keys" className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('+')}>+</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('7')}>7</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('8')}>8</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('9')}>9</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('/')}>/</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('4')}>4</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('5')}>5</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('6')}>6</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('*')}>*</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('1')}>1</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('2')}>2</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('3')}>3</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('-')}>-</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('0')}>0</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={() => appendToDisplay('.')}>.</button>
          <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={calculate}>=</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-lg cursor-pointer" onClick={clearDisplay}>C</button>

        </div>
      </div>


    </>
  )
}
export default App
