import React from "react";
import Weather from "./Weather";
import Date from "./Date";
import Thoughts from "./Thoughts";
import Photos from "./Photos";
import Quote from "./Quote";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="date">
          <Date />
        </section>
        <h1>Life is too short not to be inspirational</h1>
      </header>
      <main>
        <section className="weather">
          <Weather />
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
        <p>This will be the Footer</p>
        <div className="grid">
          <div className="grid-column">
            <h3>About this project</h3>
            <p>This is my first React project with Redux.</p>
          </div>
          <div className="grid-column">
            <h3>Let's get in contact</h3>
            <p>
              Feel free to write me in any way you want to. I'm looking forward
              to get in contact with you. Let's build great things together!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
