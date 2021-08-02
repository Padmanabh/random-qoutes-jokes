import React, { useState,useEffect } from "react";
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
  const [quotes, setQuotes] = useState();
  const [selectedQuote, setSelectedQuote] = useState({quote:"", author:""});

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
          const json = await response.json();
          console.log(json.quotes);
          setQuotes(json.quotes);
          setSelectedQuote(json.quotes[Math.floor(Math.random()* json.quotes.length )]);
      } catch (error) {
          console.log("error", error);
      }
  };

  fetchData();
  }, [])

  return (
    <div className="app" style={styles.appStyle}>
      <div id="qoute-box">
        <div id="text">
          <span id="text-ico">
            <FaQuoteLeft />
          </span>
        {selectedQuote.quote}
        </div>
        <div id="author">
          <span>-</span>
          <span>{selectedQuote.author}</span>
        </div>
        <div className="qoute-button-panel">
          <FaTwitterSquare id="tweet-quote" onClick={(e) => {
              e.preventDefault();
              window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent('"' + selectedQuote.quote + '" ' + selectedQuote.author), "_blank");
            }         
          } />
          <button
            style={styles.buttonStyle}
            onClick={() => {
              const newColor = Math.floor(Math.random() * 12);
              setStyles({
                appStyle: {
                  backgroundColor: colors[newColor],
                  color: colors[newColor],
                  transition: "all 0.2s ease-in",
                },

                buttonStyle: {
                  backgroundColor: colors[newColor],
                  transition: "all 0.9s ease-in",
                },
              });
              setSelectedQuote(quotes[Math.floor(Math.random()* quotes.length )]);
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
