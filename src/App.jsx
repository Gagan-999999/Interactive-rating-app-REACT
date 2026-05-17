import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  function handleRating(e) {
    setSelectedRating(+e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsRated(true);
  }

  function handleReset() {
    setIsRated(false);
    setSelectedRating(0);
  }

  return (
    <main>
      {isRated ? (
        <ThankYou rating={selectedRating} onReset={handleReset} />
      ) : (
        <Rating
          selectedRating={selectedRating}
          onSelectRating={handleRating}
          onFormSubmit={handleSubmit}
        />
      )}
    </main>
  );
}

export default App;
