import {useState} from 'react';



function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5

  const addValue = () => {
    setCounter(counter == 20 ? 0 : counter + 1)
  }

  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : 0)
  }

  return (
    <>
    <h1>Hello, React!</h1>
    <h2>Counter value: {counter} </h2>

    <button 
    onClick={addValue}
    >add value {counter} </button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter} </button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App