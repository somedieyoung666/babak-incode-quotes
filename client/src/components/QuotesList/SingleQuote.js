import React from "react";
import { useDispatch } from "react-redux";
import "./SingleQuote.css";

function SingleQuote(props) {
  const dispatch = useDispatch();
  const type = props.quote.change > 0 ? "rise" : "drop";
  const percent = `${type === "rise" ? "↑ " : "↓ "} ${
    props.quote.change_percent
  } %`;

  function selectHandler(selected) {
    dispatch({ type: "CLICK_SELECT", payload: [selected] });
  }

  function addWatchingHandler(selected) {
    dispatch({ type: "ADD_WATCHING", payload: selected });
  }

  return (
    <div
      onClick={() => selectHandler(props.quote)}
      data-testid="btn-add"
      className="quote-container"
    >
      <div className="quote-section-name">
        <p className="quote-ticker">{props.quote.ticker}</p>
        <p className="quote-name">{props.quote.name}</p>
      </div>
      <div className="quote-section-price">
        <div className="price">{props.quote.price} $</div>
        <div className={"change " + type}>{props.quote.change} $</div>
        <div className={"change-percent " + type}>{percent}</div>
      </div>
      <button
        onClick={() => addWatchingHandler(props.quote)}
        className="quote-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="quote-btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SingleQuote;
