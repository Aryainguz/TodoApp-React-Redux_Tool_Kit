import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// this store always takes object as an argument
const store = configureStore({
    reducer: {
        // this is the name of the reducer
        todos: todoReducer
    }
})


export default store