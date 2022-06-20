import React from "react";
import About from "./components/About";
import Nav from './components/Nav';
import "./App.css"
import "./index.css"

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
