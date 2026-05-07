import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

function addTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    const addTodoHandler = (e) => {
        e.preventDefault();
        const todoText = e.target.elements.todo.value;
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Add a todo" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}