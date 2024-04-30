"use client";

import { useState } from "react";

type PostFormProps = {
  onSubmit: (title: string) => void;
};

export const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }

    onSubmit(title.trim());
    setTitle("");
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex flex-col gap-4 lg:mx-72"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your forum post title"
        className="border p-6"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 w-40 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </div>
    </form>
  );
};
