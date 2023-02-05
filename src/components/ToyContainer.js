import React from "react";
import ToyCard from "./ToyCard";
//

function ToyContainer({toyArray}) {
  const newToyArray = toyArray.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
      />
    );
  });

  return (
    <div id="toy-collection">{newToyArray}</div>
  );
}

export default ToyContainer;
