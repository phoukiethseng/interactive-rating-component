import { useState } from "react";
import { RatingCard } from "./RatingCard.jsx";

function App() {
  const [currentRating, setCurrentRating] = useState(5);

  function handleRateClick(rating) {
    setCurrentRating(rating);
  }
  return (
    <div className="App">
      <RatingCard
        currentRating={currentRating}
        handleRateClick={handleRateClick}
      />
    </div>
  );
}

export default App;
