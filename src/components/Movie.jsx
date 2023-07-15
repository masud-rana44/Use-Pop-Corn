import React from "react";

function Movie({ Title, Poster, Year }) {
  return (
    <li
      onClick={() => {}}
      className="border-b-[2px] border-[#343a40] px-8 py-5 flex items-center gap-7 cursor-pointer hover:bg-[#1f2937]"
    >
      <img src={Poster} alt={`${Title} poster`} className="h-16 w-12" />
      <h3 className="font-semibold text-white  text-xl">{Title}</h3>
      <div className="flex flex-col gap-2">
        <p className="text-white text-lg">
          <span>📆</span> <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
