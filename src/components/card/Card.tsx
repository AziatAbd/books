import React from "react";
import Header from "../header/Header";
import { getBooksAsync } from "../../store/book/book.thunk";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = React.useState("");
  const [categories, setCategories] = React.useState("all");
  const [sort, setSort] = React.useState("relevance");
  const { maxResults } = useSelector((state: RootState) => state.book);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const categoriesChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategories(e.target.value);
  };
  const sortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBooksAsync({ search, categories, sortBy: sort, maxResults }));
  };

  React.useEffect(() => {
    dispatch(getBooksAsync({ search, categories, sortBy: sort, maxResults }));
  }, [categories, dispatch, maxResults, sort]);

  return (
    <>
      <Header
        searchChangeHandler={searchChangeHandler}
        categoriesChangeHandler={categoriesChangeHandler}
        sortChangeHandler={sortChangeHandler}
        submitHandler={submitHandler}
        search={search}
        sort={sort}
        categories={categories}
      />
      <Outlet />
    </>
  );
};

export default Card;
