import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../api/bookApi";
import { AxiosError, isAxiosError } from "axios";
import { BookRequestParamsType } from "../../types/type";

export interface CustomError {
  status: number;
  message: string;
}

export const getBooksAsync = createAsyncThunk(
  "books/getBooks",
  async (params: BookRequestParamsType) => {
    try {
      const { data } = await getBooks(params);
      return data;
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<CustomError>;
        throw new Error(error.response?.data.message);
      }
      throw new Error("Something went wrong");
    }
  }
);
