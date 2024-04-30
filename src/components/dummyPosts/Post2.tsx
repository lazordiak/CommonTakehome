"use client";

import { useState } from "react";
import { BackButton } from "../buttons/BackButton";
import { LikeSvg } from "../svgs/LikeSvg";

export const Post2 = () => {
  const [likes, setLikes] = useState(2);

  return (
    <div className="flex flex-col gap-4 lg:mx-24 mb-24">
      <div className="lg:mx-72 mb-12 flex flex-row justify-between items-center">
        <BackButton href="/forum" />
        <h3 className="text-lg lg:text-2xl text-center font-bold">
          What&apos;s your favorite NFT?
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
      <div className="border-2 flex flex-col lg:flex-row p-4 lg:p-6 justify-between lg:mx-72">
        <p className="mb-4 lg:mb-0">Mine is the ape.</p>
        <div className="flex gap-1 flex-row">
          <div className="w-6">
            <LikeSvg />
          </div>
          <p>{50}</p>
        </div>
      </div>
    </div>
  );
};
