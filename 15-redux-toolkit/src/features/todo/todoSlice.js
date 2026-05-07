import { createSlice, nanoid } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        localStorage.getItem("todos", JSON.parse)
    ],
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
            return state.filter((t) => t.id !== action.payload)
            localStorage.setItem("")
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