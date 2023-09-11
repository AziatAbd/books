import mainApi from "../config/mainApi";
import {
  BookItem,
  BookRequestParamsType,
  BookResponseType,
} from "../types/type";

const API_KEY = "AIzaSyA5zidZsKEgGRC-U4c1F8b3HjmikMbYoBE";

export const getBooks = (params: BookRequestParamsType) => {
  return mainApi.get<BookResponseType>(
    `https://www.googleapis.com/books/v1/volumes`,
    {
      params: {
        q: `${params.search}&${params.categories}+subject`,
        orderBy: params.sortBy,
        maxResults: params.maxResults,
        key: API_KEY,
      },
    }
  );
};

export const getById = (id: string | undefined) => {
  return mainApi.get<BookItem>(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
    {
      params: {
        key: API_KEY,
      },
    }
  );
};
