"use client";

import { Post1 } from "@/components/dummyPosts/Post1";
import { Post2 } from "@/components/dummyPosts/Post2";
import { Post3 } from "@/components/dummyPosts/Post3";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { PostContext } from "../layout";
import { PostDetails } from "@/components/forum/PostDetails";

export default function Page() {
  const name = usePathname();
  const { posts } = useContext(PostContext);

  if (posts.length > 0) {
    const post = posts.find((post) => name.includes(post.id!));
    if (post) {
      return (
        <PostDetails
          title={post.title}
          likes={post.likes}
          comments={post.comments}
        />
      );
    }
  }
  return (
    <>
      {name.includes("123") && <Post1 />}
      {name.includes("456") && <Post2 />}
      {name.includes("789") && <Post3 />}
    </>
  );
}
