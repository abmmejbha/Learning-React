import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [
        { id: '1', title: 'Hello World' },
        { id: '2', title: ' Redux Toolkit' },
    ]
}

function sayHello() {
    console.log('Hello World')
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () => { },
        deleteTodo: () => { },
        updateTodo: () => { },
    }
})