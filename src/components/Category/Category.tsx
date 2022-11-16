import React, { useState } from "react";
import API from "../../services";
import { CategoryType } from "../../store/quotesSlice";
import QuoteOfDay from "../QuoteOfDay/QuoteOfDay";
import styles from "./Category.module.css";

type propsType = {
  data: CategoryType;
  key: string;
};

export type Quote = {
  quoteString: string;
  length: null;
  author: string;
  category: string;
  language: null;
  date: null;
  permalink: null;
  id: null;
  background: string;
  title: null;
  tags: { name: string }[];
};

function Category({ data: { name } }: propsType) {
  const [isOpen, setOpen] = useState<Boolean>(false);
  const [quoteData, setQuoteData] = useState<Quote | null>(null);

  const handleClick = async (name: string) => {
    setOpen(!isOpen);
    if (!isOpen && !quoteData) {
      try {
        const result: Quote = await API.getQuoteByCategory(`Quote/${name}`);
        setQuoteData(result);
      } catch (e) {}
    }
  };

  return (
    <div
      className={
        isOpen ? styles.categoryContainerOpen : styles.categoryContainer
      }
    >
      <h1 className={styles.categoryHeading} onClick={(e) => handleClick(name)}>
        {name}
      </h1>
      {isOpen && quoteData && <QuoteOfDay data={quoteData} />}
    </div>
  );
}

export default Category;
