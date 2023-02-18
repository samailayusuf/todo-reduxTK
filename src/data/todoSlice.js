import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Todo One',
            completed: false
      }
  ],
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload);
        },
        // changeStatus: (state, action) => {
        //     const indexOfElem = state.todos.indexOf(action.payload);
        //     let selectedTodo = state.todos[indexOfElem];
        //     selectedTodo = {...selectedTodo, completed: !selectedTodo.completed }
        // }
    }
})

export const { addTodo, removeTodo, changeStatus } = todoSlice.actions

export default todoSlice.reducer