import React from "react";

function Description() {
  return (
    <section className="bg-[#2b3035] min-h-screen rounded-lg overflow-hidden">
      <div className="bg-[#1f2937] max-h-[220px] flex">
        <img
          src={
            "https://cdn.pixabay.com/photo/2019/08/21/02/32/light-4419996_640.jpg"
          }
          alt="Movie poster"
          className="h-[220px] w-[150px]"
        />

        <div className="p-8 text-[#dee2e6] text-lg flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white">Interstaller</h2>
          <p>16 Jul 2016 · 148 min</p>
          <p>Action, Adventure, Sci-Fi</p>⭐ 8.8 IMDb rating
        </div>
      </div>
    </section>
  );
}

export default Description;
