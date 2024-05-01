"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { InfoField } from "@/components/user/InfoField";
import { User } from "@/types/types";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import contractInfo from "../../../hardhat/artifacts/contracts/UserInfo.sol/UserInfo.json";
import { Contract } from "ethers";

export default function UserProfile() {
  useEffect(() => {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const privateKey =
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const signer = new ethers.Wallet(privateKey, provider);
    const contractABI = contractInfo.abi;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contract);

    const getData = async () => {
      try {
        const res = await fetch("/api/user");

        const { data } = await res.json();

        const { bio, ...rest } = data;

        setBio(bio);
        setUser(rest);
      } catch (err) {
        console.error(err);
      }
    };

    try {
      const getUser = async () => {
        const userData = await contract.getUser(
          "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
        );
        console.log("the tx");
        console.log({ ...userData });
        if (userData.name && userData.email) {
          setUser({
            name: userData.name,
            email: userData.email,
            postalAddress: userData.postalAddress,
            username: userData.username,
            id: userData.id,
          });
        }
      };
      getUser();
    } catch (err) {
      console.error(err);
      getData();
    } finally {
      setLoading(false);
    }
  }, []);

  const [user, setUser] = useState<User>({
    id: "GNiYe02UG4QXG4ZG4fGW",
    name: "Sky deVos",
    email: "schuylerdevos@gmail.com",
    postalAddress: "666 West 14th St",
    username: "Sky",
  });

  const [bio, setBio] = useState(
    "Schuyler deVos is a German filmmaker, actor, opera director, and author. Regarded as a pioneer of New German Cinema, his films often feature ambitious protagonists with impossible dreams, people with unusual talents in obscure fields, or individuals in conflict with nature. His style involves avoiding storyboards, emphasizing improvisation, and placing his cast and crew into real situations mirroring those in the film they are working on."
  );
  const [editingAcct, setEditingAcct] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<Contract | null>(null);

  const [transacting, setTransacting] = useState(false);
  const [txHash, setTxHash] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    if (contract) {
      setTransacting(true);

      try {
        const tx = await contract.setUser(
          user.id,
          user.name,
          user.email,
          user.postalAddress,
          user.username
        );
        await tx.wait();

        setTxHash(tx.hash);
      } catch (error) {
        console.error("Error updating user:", error);
      } finally {
        setTransacting(false);
      }
    }
  };

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
              <InfoField
                formName="username"
                editingAcct={editingAcct}
                handleChange={handleChange}
                value={user.username}
                title="Username"
              />
              <InfoField
                formName="name"
                editingAcct={editingAcct}
                handleChange={handleChange}
                value={user.name}
                title="Name"
              />
              <InfoField
                formName="email"
                editingAcct={editingAcct}
                handleChange={handleChange}
                value={user.email}
                title="Email"
              />
              <InfoField
                formName="postalAddress"
                editingAcct={editingAcct}
                handleChange={handleChange}
                value={user.postalAddress}
                title="Address"
              />
            </div>
            {transacting ? (
              <div>Data is being hashed...</div>
            ) : (
              <div className="w-full mb-24 lg:mb-0">
                <PrimaryButton
                  onClick={() => {
                    if (editingAcct) {
                      handleUpdateUser();
                    }
                    setEditingAcct(!editingAcct);
                  }}
                  text={
                    editingAcct
                      ? "Save Account Information"
                      : "Edit Account Information"
                  }
                />
                {txHash && (
                  <div className="absolute break-all lg:pr-12">
                    <p>Data successfully updated!</p>
                    <p>Transaction hash is: {txHash}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
