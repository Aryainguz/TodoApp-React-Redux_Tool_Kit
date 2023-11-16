import { createSlice, nanoid } from "@reduxjs/toolkit";

//nonoid is a function that generates unique IDs for our todos

// createSlice function generates action creators and action types that correspond to the reducers and state.

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",  // name is a predefine property always use name
    initialState,

    reducers: {

        // state is the current state of the reducer and action is the action that was dispatched or made
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description:action.payload.description
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    }
})


export const { addTodo, deleteTodo } = todoSlice.actions  
export default todoSlice.reducer