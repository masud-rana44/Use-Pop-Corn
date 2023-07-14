import React from "react";
import Nav from "./Nav";
import Results from "./Results";
import Description from "./Description";

// :root {
//   --color-primary: #6741d9;
//   --color-primary-light: #7950f2;
//   --color-text: #dee2e6;
//   --color-text-dark: #adb5bd;
//   --color-background-100: #343a40;
//   --color-background-500: #2b3035;
//   --color-background-900: #212529;
//   --color-red: #fa5252;
//   --color-red-dark: #e03131;
// }

function App() {
  return (
    <div className="bg-[#212529] min-h-screen">
      <Nav />
      <main className="max-w-[1000px] grid grid-cols-2 gap-x-8 mx-auto  mt-8">
        <Results />
        <Description />
      </main>
    </div>
  );
}

export default App;
