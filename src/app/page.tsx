"use client";

import Gallery from "@/components/gallery/Gallery";
import { Sorter } from "@/components/gallery/Sorter";
import HomeOverview from "@/components/HomeOverview";
import { NFT } from "@/types/types";
import { createContext, useMemo, useState } from "react";

const dummyApe: NFT = {
  img: "ape.jpg",
  title: "Fake NFT 0",
  price: 1000000,
  rarity: 1,
  category: "Special",
  status: "Owned",
};

const dummyNFT: NFT = {
  img: "nft2.jpg",
  title: "Fake NFT 1",
  price: 300000,
  rarity: 2,
  category: "Normal",
  status: "Unowned",
};

const dummyNFT2: NFT = {
  img: "nft3.jpg",
  title: "Fake NFT 2",
  price: 20000000,
  rarity: 3,
  category: "Special",
  status: "Unowned",
};

const dummyNFT3: NFT = {
  img: "nft4.png",
  title: "Fake NFT 3",
  price: 10000,
  rarity: 2,
  category: "Special",
  status: "Owned",
};

const nfts: NFT[] = [
  dummyApe,
  dummyNFT,
  dummyNFT3,
  dummyApe,
  dummyNFT2,
  dummyApe,
  dummyNFT2,
  dummyNFT2,
  dummyApe,
  dummyNFT,
  dummyNFT3,
  dummyNFT3,
  dummyNFT2,
  dummyNFT,
  dummyNFT3,
  dummyNFT,
  dummyNFT2,
  dummyApe,
  dummyApe,
  dummyNFT2,
  dummyNFT,
  dummyApe,
  dummyNFT3,
];

type GalleryContext = {
  gallery: NFT[];
  setGallery: (nfts: NFT[]) => void;
};

export const GalleryContext = createContext<GalleryContext>({
  gallery: [],
  setGallery: () => {},
});

export default function Home() {
  const [gallery, setGallery] = useState<NFT[]>(nfts);

  const value = useMemo(() => ({ gallery, setGallery }), [gallery]);
  return (
    <main className="flex flex-col justify-between">
      <GalleryContext.Provider value={value}>
        <HomeOverview />
        <div className="border border-2-black" />
        <p className="my-6 text-xl font-semibold">
          You currently have 23 NFTs in your collection.
        </p>
        <div className="mb-12">
          <Sorter />
        </div>
        <Gallery />
      </GalleryContext.Provider>
    </main>
  );
}
