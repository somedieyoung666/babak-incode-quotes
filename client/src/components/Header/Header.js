import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <span className="header-logo--first-word">incode</span>{" "}
          <span className="header-logo--second-word">finance</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
