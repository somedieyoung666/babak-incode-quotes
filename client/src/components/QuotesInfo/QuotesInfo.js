import React from "react";
import { useSelector } from "react-redux";
import "./QuotesInfo.css";

function QuotesInfo() {
  const selectedQuote = useSelector((state) => state.selectReducer.select);
  const date = new Date(selectedQuote.last_trade_time).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="info-container">
      <div className="info-header">
        {selectedQuote.exchange}
        {" at "}
        {date}
      </div>
      <div className="info-name">
        {selectedQuote.name} / {selectedQuote.ticker}
      </div>
      <div className="info-main">
        <div className="info-price">price: {selectedQuote.price}$</div>
        <div className="info-change">change: {selectedQuote.change}$</div>
        <div className="info-change-percent">
          percent change: {selectedQuote.change_percent}%
        </div>
        <div className="info-change-divident">
          divident: {selectedQuote.dividend}%
        </div>
        <div className="info-change-yield">yield: {selectedQuote.yield}%</div>
      </div>
    </div>
  );
}

export default QuotesInfo;
