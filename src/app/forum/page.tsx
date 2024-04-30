"use client";

import { ForumPost } from "@/components/forum/ForumPost";
import { PostForm } from "@/components/forum/PostForm";
import { useContext } from "react";
import { PostContext } from "./layout";

export default function Forum() {
  const { posts, setPosts } = useContext(PostContext);

  const handleSubmit = (title: string) => {
    setPosts([
      ...posts,
      {
        title: title,
        likes: 0,
        comments: 0,
        id: (Math.random() + 1).toString(36).substring(7),
      },
    ]);
  };

  return (
    <div>
      <div className="max-w-xl">
        <p className="text-4xl font-extrabold mb-12">NFTLove Forums</p>
        <p className="mb-24">
          Here you can find threads posted by other NFTLovers, or create your
          own! To create a thread, simply write out your question or comment
          below and post. Underneath, you&apos;ll see other threads you can
          engage in. Why not try helping another user out?
        </p>
      </div>
      <div className="mb-12">
        <p className="text-2xl font-bold text-center mb-4">New Thread</p>
        <PostForm onSubmit={handleSubmit} />
      </div>
      <p className="text-2xl font-bold text-center mb-4">Active Posts</p>
      <div className="flex flex-col gap-4 mb-24">
        <ForumPost
          title="HELP: BEST PLACE TO SELL NFTS?"
          comments={2}
          likes={0}
          slug="123"
        />
        <ForumPost
          title="What's your favorite NFT?"
          comments={1}
          likes={2}
          slug="456"
        />
        <ForumPost
          title="What is blockchain please can someone explain to me"
          comments={0}
          likes={30}
          slug="789"
        />
        {posts.map((newPost, i) => {
          return (
            <ForumPost
              key={i}
              title={newPost.title}
              comments={0}
              likes={0}
              slug={newPost.id || i.toString()}
            />
          );
        })}
      </div>
    </div>
  );
}
