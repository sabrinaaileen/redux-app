import React from "react";
import Weather from "./Weather";
import CurrentDate from "./CurrentDate";
import Thoughts from "./Thoughts";
import Photos from "./Photos";
import Quote from "./Quote";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <section className="date">
        <CurrentDate />
      </section>
      <header className="App-header">
        <h1>Life is too short not to be inspirational</h1>
      </header>
      <main>
        <section className="weather">
          <Weather defaultCity="Munich" />
        </section>
        <section className="thoughts">
          <Thoughts />
        </section>
        <section className="photos">
          <Photos />
        </section>
        <section className="quote">
          <Quote />
        </section>
      </main>
      <footer>
        <div className="grid">
          <div className="grid-column">
            <h3>About this project</h3>
            <p>This is my first React project with Redux.</p>
            <p>
              Visit my{" "}
              <a
                href="https://www.sabrina-aileen-hodapp.de"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Website
              </a>
            </p>
          </div>
          <div className="grid-column">
            <h3>Let's get in contact</h3>
            <p>
              Feel free to write me in any way you want to. I'm looking forward
              to get in contact with you. Let's build great things together!
              This website is open-sourced on{" "}
              <a
                href="https://github.com/sabrinaaileen/redux-app"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
