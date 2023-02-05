import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(data => setToyArray(data))
  }, []);

  const [toyArray, setToyArray] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray = {toyArray} />
    </>
  );
}

export default App;
