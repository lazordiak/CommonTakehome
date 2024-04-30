"use client";

import { GalleryContext } from "@/app/page";
import { NFT } from "@/types/types";
import { useContext, useEffect, useState } from "react";

export const Sorter = () => {
  const [activeSort, setActiveSort] = useState(1);
  const nftGallery = useContext(GalleryContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sortHandler(1);
  }, []);

  const sortHandler = (sortType: number) => {
    setLoading(true);
    const gallery = nftGallery.gallery;
    const setGallery = nftGallery.setGallery;
    let sortedGallery: NFT[] = [];
    switch (sortType) {
      case 1:
        sortedGallery = gallery.sort((a, b) => {
          return a.rarity - b.rarity;
        });
        setGallery([...sortedGallery]);
        setActiveSort(1);
        break;
      case 2:
        sortedGallery = gallery.sort((a) => {
          if (a.category === "Special") {
            return -1;
          } else {
            return 0;
          }
        });
        setGallery([...sortedGallery]);
        setActiveSort(2);
        break;
      case 3:
        sortedGallery = gallery.sort((a) => {
          if (a.status === "Owned") {
            return -1;
          } else {
            return 0;
          }
        });
        setGallery([...sortedGallery]);
        setActiveSort(3);
        break;
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center flex-col lg:flex-row">
      <p className="text-lg mb-6 lg:mb-0 lg:mr-6 font-semibold">Sort By:</p>
      <div className="flex gap-4">
        <button
          onClick={() => sortHandler(1)}
          className={`hover:bg-primary font-semibold hover:text-white py-1 px-2 border border-primary hover:border-transparent rounded ${
            activeSort === 1
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
        >
          Rarity
        </button>
        <button
          onClick={() => sortHandler(2)}
          className={`hover:bg-primary font-semibold hover:text-white py-1 px-2 border border-primary hover:border-transparent rounded ${
            activeSort === 2
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => sortHandler(3)}
          className={`hover:bg-primary font-semibold hover:text-white py-1 px-2 border border-primary hover:border-transparent rounded ${
            activeSort === 3
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
        >
          Status
        </button>
      </div>
    </div>
  );
};
