"use client";

import { ForumPostType } from "@/types/types";
import { ReactNode, createContext, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const initialPostContext = {
  posts: [],
  setPosts: ([]) => {},
};

export type PostContextType = {
  posts: ForumPostType[];
  setPosts: (post: ForumPostType[]) => void;
};

export const PostContext = createContext<PostContextType>(initialPostContext);

export default function Layout({ children }: LayoutProps) {
  const [postsToPass, setPostsToPass] = useState<ForumPostType[]>([]);
  return (
    <PostContext.Provider
      value={{ posts: postsToPass, setPosts: setPostsToPass }}
    >
      {children}
    </PostContext.Provider>
  );
}
