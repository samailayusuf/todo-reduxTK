import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]
            console.log(action)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload);
            console.log(action)
        },
        
    }
})

export const { addTodo, removeTodo, changeStatus } = todoSlice.actions

export default todoSlice.reducer
