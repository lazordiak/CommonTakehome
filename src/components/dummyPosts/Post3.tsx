"use client";

import { useState } from "react";
import { BackButton } from "../buttons/BackButton";
import { LikeSvg } from "../svgs/LikeSvg";

export const Post3 = () => {
  const [likes, setLikes] = useState(50);

  return (
    <div className="flex flex-col gap-4 lg:mx-24 mb-24">
      <div className="lg:mx-72 mb-12 flex flex-row justify-between items-center">
        <BackButton href="/forum" />
        <h3 className="text-lg lg:text-2xl text-center font-bold">
          What is blockchain please can someone explain it to me
        </h3>
        <div
          onClick={() => {
            setLikes(likes + 1);
          }}
          className="flex w-20 cursor-pointer select-none justify-between border-2 hover:border-primary p-2 rounded flex-row"
        >
          <div className="w-6">
            <LikeSvg />
          </div>
          <p>{likes}</p>
        </div>
      </div>
    </div>
  );
};
