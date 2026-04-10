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

export const useTodo = () => {
    return useContext(TodoContext)  // useContext ei TodoContext theke current value read korbe
}

export const TodoProvider = TodoContext.Provider // TodoProvider hocche TodoContext er Provider 
                                                // component, jeta value provide korbe to the components that need it.