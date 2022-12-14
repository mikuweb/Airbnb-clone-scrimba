import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./style.css";
import data from "./data";

function App() {
  // const [count, setCount] = useState(0);

  /*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

  const cardsDisplay = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });


  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards_section">{cardsDisplay}</div>
    </div>
  );
}

export default App;
