"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { User } from "@/types/types";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

export default function UserProfile() {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/user");

        const { data } = await res.json();

        const { bio, ...rest } = data;

        setBio(bio);
        setUser(rest);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const [error, setError] = useState<any>("");
  const [user, setUser] = useState<User | null>(null);
  const [bio, setBio] = useState<string>("");
  const [editingAcct, setEditingAcct] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center pt-24 items-center">
        <FadeLoader loading={loading} color="#4169E1" />
      </div>
    );
  }
  return (
    <div className="lg:h-screen">
      {user && (
        <div className="flex flex-col lg:flex-row lg:h-3/5">
          <div className="lg:flex-1 flex flex-col  justify-between">
            <h1 className="text-4xl font-bold mb-12 lg:mb-0">Bio</h1>
            <div className="lg:h-1/2 mb-12 lg:mb-0">
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                disabled={!editingBio}
                name="bio"
                maxLength={450}
                className={
                  "resize-none text-lg w-full h-96 lg:h-full p-2 rounded border " +
                  `${editingBio ? "" : "bg-white"}`
                }
              />
              <label htmlFor="bio" className="mb-12 lg:mb-0 italic">
                Chars: {450 - bio.length}/450
              </label>
            </div>
            <div className="w-full">
              <PrimaryButton
                onClick={() => {
                  setEditingBio(!editingBio);
                }}
                text={editingBio ? "Save Bio" : "Edit Bio"}
              />
            </div>
          </div>
          <div className="border-2 my-12 lg:mx-12" />
          <div className="lg:flex-1 flex flex-col justify-between">
            <h1 className="text-4xl font-bold mb-12 lg:mb-0">
              Account Information
            </h1>
            <div className="grid gap-4 text-lg mb-12 lg:mb-0">
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  className={
                    "flex-2 border-b border-1-black rounded border " +
                    `${editingAcct ? "bg-slate-100 " : "bg-white"}`
                  }
                  defaultValue={user.username}
                  disabled={!editingAcct}
                ></input>
                <p className="font-semibold flex-1 lg:text-end">Username</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  className={
                    "flex-2 border-b border-1-black rounded border " +
                    `${editingAcct ? "bg-slate-100 " : "bg-white"}`
                  }
                  defaultValue={user.name}
                  disabled={!editingAcct}
                ></input>
                <p className="font-semibold flex-1 lg:text-end">Name</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  className={
                    "flex-2 border-b border-1-black rounded border " +
                    `${editingAcct ? "bg-slate-100 " : "bg-white"}`
                  }
                  defaultValue={user.email}
                  disabled={!editingAcct}
                ></input>
                <p className="font-semibold flex-1 lg:text-end">Email</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  className={
                    "flex-2 border-b border-1-black rounded border " +
                    `${editingAcct ? "bg-slate-100" : "bg-white"}`
                  }
                  defaultValue={user.address}
                  disabled={!editingAcct}
                ></input>
                <p className="font-semibold flex-1 lg:text-end">Address</p>
              </div>
            </div>
            <div className="w-full mb-12 lg:mb-0">
              <PrimaryButton
                onClick={() => {
                  setEditingAcct(!editingAcct);
                }}
                text={
                  editingAcct
                    ? "Save Account Information"
                    : "Edit Account Information"
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
