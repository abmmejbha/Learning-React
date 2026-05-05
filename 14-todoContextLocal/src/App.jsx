import { useState } from 'react'
import {TodoProvider} from './contexts'
import {TodoItem, TodoForm} from './components'


function App() {

    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos((prev) => {
            return [{ id: Date.now(), ...todo }, ...prev]
        })
    }
    const updatedTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    }
    const deleteTodo = (id) => {
        //jetar id match korbe na seta rakhbo ,bakigulo fele debo
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    }
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id 
        ?{...prevTodo, completed: !prevTodo.completed }
        :prevTodo
    ))
    }

    return (
        <TodoProvider value= {{todos, addTodo, updatedTodo,deleteTodo, toggleComplete}}>
            <div>App Works</div>
        <TodoItem/>
        <TodoForm/>
        </TodoProvider>
    )
}
export default App