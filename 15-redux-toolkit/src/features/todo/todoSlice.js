import { createSlice, nanoid } from '@reduxjs/toolkit'


// const initialState = {
//     todo: [
//         { id: '1', title: 'Hello World' },
//         { id: '2', title: ' Redux Toolkit' },
//     ]
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.push(todo)
        },
        deleteTodo: (state, action) => {
            return state.filter((t) => t.id !== action.payload)
        },
        updateTodo: () => {

        },
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer