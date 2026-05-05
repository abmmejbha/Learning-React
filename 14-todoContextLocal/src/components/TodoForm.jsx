import {useTodo} from '../contexts'
import {useState} from 'react'


function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return
        else {
            addTodo({ todo, completed: false })
        }
        setTodo("")
    }

    return (
        <div>
            <input type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write a Task"
            />
            <button
                onClick={add}
            >
                submit
            </button>
        </div>
    )
}
export default TodoForm