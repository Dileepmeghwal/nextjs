import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// Create slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, removeTodo } = todosSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
