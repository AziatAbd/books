import React, { useEffect, useState } from "react";
import { getById } from "../api/bookApi";
import { useParams } from "react-router-dom";
import { BookItem } from "../types/type";

const BookInnerPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<BookItem>();

  const getBookById = async () => {
    try {
      const { data } = await getById(bookId);
      setBook(data);
    } catch (error) {}
  };

  useEffect(() => {
    getBookById();
  }, []);

  console.log(book);

  return (
    <div className="flex">
      <div className=" bg-stone-200 sm:py-10 sm:px-28 py-2 px-3">
        <img
          src={book?.volumeInfo.imageLinks.small}
          alt={book?.volumeInfo.title}
          className="shadow-2xl"
        />
      </div>
      <div className="p-10 w-6/12">
        <p className="text-gray-400 sm:mb-10 mb-2">{book?.volumeInfo.categories}</p>
        <h1 className="sm:text-xl text-base font-bold mb-4">{book?.volumeInfo.title}</h1>
        <p className="text-gray-400 underline mb-4">
          {book?.volumeInfo.authors.join(", ")}
        </p>
        <p className="border h-40 p-2">{book?.volumeInfo.publisher}</p>
      </div>
    </div>
  );
};

export default BookInnerPage;
