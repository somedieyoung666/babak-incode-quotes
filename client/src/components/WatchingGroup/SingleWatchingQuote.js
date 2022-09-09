import React from "react";
import { useDispatch } from "react-redux";
import "./SingleWatchingQuote.css";

function SingleWatchingQuote(props) {
  const dispatch = useDispatch();
  let priceDirection = "rise";
  let arrow = "↑";
  let change = `+${props.quote.change} $`;
  let percentChange = `+${props.quote.change_percent} %`;

  if (props.quote.change < 0) {
    priceDirection = "drop";
    arrow = "↓";
    change = `${props.quote.change} $`;
    percentChange = `-${props.quote.change_percent} %`;
  }

  function removeWatchingHandler(selected) {
    dispatch({ type: "REMOVE_WATCHING", payload: selected });
  }

  return (
    <div className="single-watching">
      <div className={priceDirection + " direction-arrow"}>{arrow}</div>
      <div className="single-watching-info">
        <div className="single-watching-ticker">{props.quote.ticker}</div>
        <div className="single-watching-price">{props.quote.price} $</div>
      </div>
      <div className={priceDirection + " single-watching-changes"}>
        <div className="single-watching-percent-change">{percentChange}</div>
        <div className="single-watching-change">{change}</div>
      </div>
      <button
        onClick={() => removeWatchingHandler(props.quote)}
        className="btn-close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon-close"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SingleWatchingQuote;
