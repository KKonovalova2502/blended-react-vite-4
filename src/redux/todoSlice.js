import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.currentTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;
