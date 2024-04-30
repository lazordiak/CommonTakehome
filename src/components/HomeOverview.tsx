import { useState } from "react";
import { Sorter } from "./gallery/Sorter";

const username = "ApeLover69";

const HomeOverview = () => {
  return (
    <div className="w-full max-w-lg mb-16">
      <h1 className="text-2xl lg:text-6xl font-bold mb-12">
        Hello, {username}!
      </h1>
      <p className="font-xl">
        Here you can view your own personal collection of NFTs, as well as sort
        them by their rarity, category and ownership status.{" "}
        <span className="font-bold">Happy hunting!</span>
      </p>
    </div>
  );
};

export default HomeOverview;
