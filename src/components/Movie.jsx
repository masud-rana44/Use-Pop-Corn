import React from "react";

function Movie() {
  return (
    <div className="border-b-[2px] border-[#343a40] px-8 py-5 flex items-center gap-7 cursor-pointer">
      <img
        src={
          "https://cdn.pixabay.com/photo/2019/08/21/02/32/light-4419996_640.jpg"
        }
        alt="Movie poster"
        className="h-16 w-12"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-white  text-xl">Interstellar</h2>
        <p className="text-white text-lg">📆 2014</p>
      </div>
    </div>
  );
}

export default Movie;
