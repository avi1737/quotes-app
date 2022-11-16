import React, { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { CategoryType, fetchQuotes } from "./store/quotesSlice";
import Category from "./components/Category/Category";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.quote);
  const { categoryList, isLoading } = data;

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      {categoryList.map((item: CategoryType) => (
        <Category data={item} key={item.name} />
      ))}
    </div>
  );
}

export default App;
