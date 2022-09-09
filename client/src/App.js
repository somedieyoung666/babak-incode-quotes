import React from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import "./App.css";

import Header from "./components/Header/Header";
import WatchingGroup from "./components/WatchingGroup/WatchingGroup";
import QuotesList from "./components/QuotesList/QuotesList";
import QuotesInfo from "./components/QuotesInfo/QuotesInfo";

function App() {
  const dispatch = useDispatch();
  // Подключение к сокету
  const socket = io("http://localhost:4000/");
  socket.emit("start");
  // Обновление всех данных на каждый тик(5 сек)
  socket.on("ticker", function (response) {
    dispatch({ type: "NEW_DATA", payload: response });
    dispatch({ type: "UPDATE_SELECT", payload: response });
    dispatch({ type: "UPDATE_WATCHINGS", payload: response });
  });

  return (
    <div className="wrapper">
      <Header />
      <WatchingGroup />
      <div className="quotes-wrapper">
        <QuotesList />
        <QuotesInfo />
      </div>
    </div>
  );
}

export default App;
