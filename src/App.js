import React, { useContext } from "react";
import { FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div id="qoute-box">
        <div id="text">
          <span id="text-ico">
            <FaQuoteLeft />
          </span>
          In id consequat mollit mollit ex velit anim ipsum eiusmod nulla enim.
        </div>
        <div id="author">
          <span>-</span>
          <span>Sit aute ullamco ex</span>
        </div>
        <div className="qoute-button-panel">
          <FaTwitterSquare id="tweet-quote" onClick={() => alert("hi")} />
          <button id="new-qoute">New qoute</button>
        </div>
      </div>
    </div>
  );
}

export default App;
