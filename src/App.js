import React, { useState } from "react";
import { FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
import "./App.css";

function App() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const color = colors[Math.floor(Math.random() * 12)];

  const iniStyles = {
    appStyle: {
      backgroundColor: color,
      color: color,
      transition: "all 0.2s ease-in",
    },

    buttonStyle: {
      backgroundColor: color,
      transition: "all 0.2s ease-in",
    },
  };

  const [styles, setStyles] = useState(iniStyles);

  return (
    <div className="app" style={styles.appStyle}>
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
          <button
            style={styles.buttonStyle}
            onClick={() => {
              const newColor = Math.floor(Math.random() * 12);
              setStyles({
                appStyle: {
                  backgroundColor: colors[newColor],
                  color: colors[newColor],
                  // transitionProperty: "all",
                  // transitionDuration: "3s",
                  transition: "all 0.2s ease-in",
                },

                buttonStyle: {
                  backgroundColor: colors[newColor],
                  transition: "all 0.2s ease-in",
                },
              });
            }}
            id="new-qoute"
          >
            New qoute
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
