"use client";

import { useContext, useState } from "react";
import { GalleryContext } from "@/app/page";
import { NftCard } from "../cards/NftCard";
import { NFT } from "@/types/types";
import NFTModal from "../modal/NftModal";

const Gallery = () => {
  const gallery = useContext(GalleryContext);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentNft, setCurrentNft] = useState<NFT | null>(null);
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
      {gallery.gallery.map((nft, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setCurrentNft(nft);
              setModalOpen(true);
            }}
          >
            <NftCard nft={nft} />
          </div>
        );
      })}
      {modalOpen && currentNft && (
        <NFTModal
          nft={currentNft}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
