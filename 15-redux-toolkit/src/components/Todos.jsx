import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()

    return (
        <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-indigo-200 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-800">Todos</h2>

            {todos.length === 0 && (
                <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500">
                    No todos yet. Add one from the input above.
                </p>
            )}

            <ul className="space-y-3 flex shadow-sm">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                        >
                            <span className="text-base text-slate-700">{todo.text}</span>
                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                className="rounded-lg cursor-pointer hover:bg-red-900 bg-rose-500 px-3 py-1.5 text-sm font-medium text-white transition active:scale-95"
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos

