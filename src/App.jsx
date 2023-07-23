import { useState } from "react";
import { useGeoLocation } from "./useGeoLocation";

function App() {
  const [countClicks, setCountClicks] = useState(0);
  const {
    error,
    isLoading,
    position: { lat, lng },
    getPosition,
  } = useGeoLocation();

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div>
      <button className="btn-add" onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>
      {error && <p>{error}</p>}
      {!error && (
        <>
          <p>
            You GPS position:{" "}
            {isLoading ? "loading positions..." : `${lat} ${lng}`}
          </p>
          <p>You requested positions {countClicks} times</p>
        </>
      )}
    </div>
  );
}

export default App;
