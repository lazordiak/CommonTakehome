export type NFT = {
  img: string;
  title: string;
  rarity: 1 | 2 | 3;
  price: number;
  category: "Special" | "Normal";
  status: "Owned" | "Unowned";
};

export type User = {
  id: string;
  name: string;
  email: string;
  postalAddress: string;
  username: string;
};

export type Meetup = {
  category: "collaboration" | "meetup";
  description: string;
  email: string;
  location: string;
  organizer: string;
  time: string;
  title: string;
};

export type ForumPostType = {
  id?: string;
  title: string;
  likes: number;
  comments: number;
};
