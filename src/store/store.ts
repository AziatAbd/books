import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book/book.slice";

export const store = configureStore({
  reducer: {
    [bookSlice.name]: bookSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
