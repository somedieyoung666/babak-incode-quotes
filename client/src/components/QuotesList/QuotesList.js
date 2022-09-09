import React from "react";
import { useSelector } from "react-redux";
import "./QuotesList.css";
import SingleQuote from "./SingleQuote";

function QuotesList() {
  const data = useSelector((state) => state.dataReducer.data);

  return (
    <div className="quotes-list">
      <h2 className="quotes-list-header">You may be interested</h2>
      {data.map((quote) => (
        <SingleQuote key={quote.ticker} quote={quote} />
      ))}
    </div>
  );
}

export default QuotesList;
