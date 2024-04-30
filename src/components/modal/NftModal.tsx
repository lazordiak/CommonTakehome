// components/NFTModal.tsx
import { NFT } from "@/types/types";
import React from "react";

type NFTModalProps = {
  nft: NFT | null;
  onClose: () => void;
};

const NFTModal: React.FC<NFTModalProps> = ({ nft, onClose }) => {
  if (!nft) return null;

  const { img, title, rarity, price, category, status } = nft;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg max-w-lg w-full relative"
      >
        <button
          className="absolute top-4 right-6 text-4xl text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img src={img} alt={title} />
        </div>
        <p>
          <span className="font-semibold">Rarity:</span> {rarity}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {status}
        </p>
      </div>
    </div>
  );
};

export default NFTModal;
