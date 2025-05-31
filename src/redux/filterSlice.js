import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTodos } from './todoSlice';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { text: '' },
  reducers: {
    changeFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectTextFilter = state => state.filters.text;

export const selectFilteredContacts = createSelector(
  [selectTodos, selectTextFilter],
  (todos, textFilter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(textFilter.toLowerCase()),
    );
  },
);
