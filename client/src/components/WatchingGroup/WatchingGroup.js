import React from "react";
import "./WatchingGroup.css";

import SingleWatchingQuote from "./SingleWatchingQuote";
import { useSelector } from "react-redux";

function WatchingGroup() {
  const watching = useSelector((state) => state.watchingReducer.watching);
  return (
    <div className="watching-group">
      <div className="watching-group-header">This is your watching group:</div>
      <div className="watching-group-content">
        {watching.map((quote) => {
          if (quote != undefined) {
            return <SingleWatchingQuote key={quote.ticker} quote={quote} />;
          }
        })}
      </div>
    </div>
  );
}

export default WatchingGroup;
