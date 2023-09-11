import React from "react";
import BookBackground from "../../assets/images/1675389350_foni-club-p-fon-zadnii-knizhnie-polki-4.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/icons8-search.svg";

type HeaderProps = {
  searchChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categoriesChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
  sort: string;
  categories: string;
};

const Header = ({
  searchChangeHandler,
  categoriesChangeHandler,
  sortChangeHandler,
  submitHandler,
  search,
  sort,
  categories,
}: HeaderProps) => {
  return (
    <>
      <div className="absolute z-10 w-full text-center text-white mt-10">
        <h1 className="font-bold opacity-100 text-5xl px-20">
          Search for books
        </h1>

        <form
          onSubmit={submitHandler}
          className="flex items-center justify-center mt-10"
        >
          <input
            type="text"
            className="w-4/12 p-2 text-black rounded-md"
            placeholder="Book name..."
            onChange={searchChangeHandler}
            value={search}
          />
          <button type="submit" className="-ml-10">
            <SearchIcon />
          </button>
        </form>

        <div className="flex justify-center gap-3 mt-6">
          <label htmlFor="categories" className="font-semibold">
            Categories
          </label>
          <select
            id="categories"
            className="text-gray-500 font-medium rounded-md"
            value={categories}
            onChange={categoriesChangeHandler}
          >
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>

          <label htmlFor="sortBy" className="font-semibold">
            Sorting by
          </label>
          <select
            id="sortBy"
            className="text-gray-500 font-medium rounded-md"
            value={sort}
            onChange={sortChangeHandler}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>

      <div className="bg-black">
        <img
          src={BookBackground}
          alt="book-img"
          className="w-full h-72 object-cover opacity-60"
        />
      </div>
    </>
  );
};

export default Header;
