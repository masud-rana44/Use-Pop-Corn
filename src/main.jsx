import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App.jsx";
// import "./index.css";
import StarRating from "./components/StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating
      color="#ccc"
      maxRating={5}
      defaultRating={3}
      onSetRating={() => {}}
      size={30}
      message={["terrible", "bad", "okay", "good", "amazing"]}
    />
  </React.StrictMode>
);
