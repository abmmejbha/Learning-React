import { createSlice, nanoid } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: 
        JSON.parse(localStorage.getItem('todos')) || []
    ,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.push(todo)
            localStorage.setItem("todos", JSON.stringify(state))
        },
        deleteTodo: (state, action) => {
            const d = state.filter((t) => t.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(d))
            return d
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.find((t) => t.id === id)
            if (todo) {
                todo.text = text
            }
            localStorage.setItem("todos", JSON.stringify(state))
        },
    }
})
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer