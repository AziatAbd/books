import React from "react";
import BookCard from "../UI/BookCard";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../store/book/book.slice";

const CardList = () => {
  const dispatch = useDispatch();
  const { books, isLoading, totalItems, maxResults } = useSelector(
    (state: RootState) => state.book
  );

  const loadMoreHandler = () => {
    dispatch(loadMore());
  };

  return (
    <>
      {isLoading && (
        <p className="fixed z-50 -top-0 text-white opacity-60 flex justify-center items-center font-bold text-xl bg-black w-screen h-screen">
          Loading...
        </p>
      )}
      <h1 className="mt-4 mb-10 text-lg font-bold text-center">
        Found {totalItems} results
      </h1>
      <div className="grid">
        <div className="flex flex-wrap gap-10 justify-center">
          {books && books !== null && books.length > 0 ? (
            <>
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  author={book.volumeInfo.authors}
                  id={book.id}
                  bookImg={book.volumeInfo.imageLinks?.thumbnail}
                  categories={book.volumeInfo.categories}
                  bookTitle={book.volumeInfo.title}
                />
              ))}
            </>
          ) : (
            <h1 className="text-5xl font-bold mx-auto mt-20">
              Please search first
            </h1>
          )}
        </div>
        {maxResults === 40 ? null : (
          <button
            onClick={loadMoreHandler}
            className="my-10 px-4 py-1 rounded-md bg-slate-700 w-fit mx-auto text-white"
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default CardList;
