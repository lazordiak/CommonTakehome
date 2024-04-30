import { NFT } from "@/types/types";
import { FC } from "react";

type NftCardProps = {
  nft: NFT;
};

export const NftCard: FC<NftCardProps> = ({ nft }) => {
  const { img, title, rarity, price, category, status } = nft;

  return (
    <div className="w-full h-82 mx-auto bg-white border-2 border-black hover:border-primary cursor-pointer rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-48">
        <img
          src={img}
          alt={"A charming NFT"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-xl italic font-bold">{title}</h2>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">Rarity: </span> {rarity}
        </p>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">Category: </span> {category}
        </p>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">Status: </span> {status}
        </p>
      </div>
    </div>
  );
};
