import { useState } from "react";
import "./App.css";
import StarRating from "./star-rating";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      Current Rating: {rating}
      <StarRating onChange={setRating} />
    </div>
  );
}

export default App;
