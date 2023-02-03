import React from "react";
import Boards from "./components/Boards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Boards />
    </div>
  );
}

export default App;
