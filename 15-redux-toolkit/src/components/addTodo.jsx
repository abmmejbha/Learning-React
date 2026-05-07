import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction } from '../features/todo/todoSlice';

function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    const addTodoHandler = (e) => {
        e.preventDefault();
        const todoText = input.trim();

        if (!todoText) return;

        dispatch(addTodoAction(todoText));
        setInput('');
    };

    return (
        <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
            <form onSubmit={addTodoHandler} className="flex gap-3">
                <input
                    type="text"
                    name="todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a todo"
                    className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
                <button
                    type="submit"
                    className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700 active:scale-95"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo