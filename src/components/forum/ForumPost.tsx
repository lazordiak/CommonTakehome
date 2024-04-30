"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { LikeSvg } from "../svgs/LikeSvg";
import { CommentSvg } from "../svgs/CommentSvg";

type ForumPostProps = {
  title: string;
  likes: number;
  comments: number;
  slug: string;
};

export const ForumPost: FC<ForumPostProps> = ({
  title,
  likes,
  comments,
  slug,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`forum/${slug}`)}
      className="border-2 cursor-pointer flex flex-col lg:flex-row p-4 lg:p-6 hover:border-primary justify-between lg:mx-72"
    >
      <p className="mb-4 lg:mb-0 max-w-lg font-semibold">{title}</p>
      <div className="flex w-24 justify-between flex-row">
        <div className="flex gap-1 flex-row">
          <div className="w-6">
            <LikeSvg />
          </div>
          <p>{likes}</p>
        </div>
        <div className="flex gap-1 flex-row">
          <div className="w-6">
            <CommentSvg />
          </div>
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
};
