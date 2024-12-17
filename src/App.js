import React from "react";

import Date from "./Date";
import { Counter } from "./features/counter/Counter";
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
        <section className="weather"></section>
        <section className="thoughts">
          <p>The thoughts will be displayed here</p>
        </section>
        <section className="photos">
          <p>The photos will be displayed here</p>
        </section>
        <section className="quote">
          <p>The quote will be displayed here</p>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
