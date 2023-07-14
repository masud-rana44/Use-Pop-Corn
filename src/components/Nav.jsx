import React from "react";

function Nav() {
  return (
    <nav className="w-full bg-[#6741d9] px-6 py-4 flex items-center justify-between flex-wrap">
      <h3 className="text-white font-bold text-3xl">
        🍿 <span className="display-none">usePopcorn</span>
      </h3>
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-[#7950f2] border-none outline-none px-4 py-3 min-w-[300px] rounded-lg text-white text-xl placeholder:text-[#adb5bd] shadow md:min-w-[450px]"
      />
      <p className="text-xl text-[#dee2e6]">
        Found <span className="font-bold text-2xl text-white">0</span> results
      </p>
    </nav>
  );
}

export default Nav;
