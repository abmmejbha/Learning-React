import { useState } from "react"
import { useTodo } from '../contexts'

function TodoItem({ todo }) {
    const { updatedTodo, deleteTodo, toggleComplete } = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const editTodo = () => {
        updatedTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false)
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={() => toggleComplete(todo.id)}
                checked={todo.completed}
            />
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <button
                value={isTodoEditable}
                onClick={() => isTodoEditable ? editTodo() : setIsTodoEditable(true)}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                value={todoMsg}
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}
export default TodoItem