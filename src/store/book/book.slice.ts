import { createSlice } from "@reduxjs/toolkit";
import { getBooksAsync } from "./book.thunk";
import { BookItem } from "../../types/type";

type InitialStateType = {
  books: BookItem[];
  totalItems: number;
  isLoading: boolean;
  error: string | unknown;
  maxResults: number;
};

const initialState: InitialStateType = {
  books: [],
  totalItems: 0,
  isLoading: false,
  error: "",
  maxResults: 30,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.maxResults =+ 40;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.fulfilled, (state, { payload }) => {
        state.books = payload.items;
        state.totalItems = payload.totalItems;
        state.error = "";
        state.isLoading = false;
      })
      .addCase(getBooksAsync.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getBooksAsync.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { loadMore } = bookSlice.actions;
