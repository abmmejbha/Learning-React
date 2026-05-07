
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-200 px-4 py-10 max-w-screen mx-auto">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-4xl font-black tracking-tight text-slate-900">
          Redux Toolkit Todo
        </h1>
        <p className="mt-3 text-center text-sm text-slate-600">
          Add, view, and remove todos with Tailwind styling.
        </p>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App