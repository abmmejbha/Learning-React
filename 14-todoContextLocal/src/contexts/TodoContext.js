import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
}) // object toiri korechi

// custom hook to use the context
export const useTodo = () => {
    // useContext ei TodoContext theke current value read korbe
    return useContext(TodoContext)  
}

export const TodoProvider = TodoContext.Provider 
// component, jeta value provide korbe to the components that need it.

// export TodoContext, useTodo, TodoProvider