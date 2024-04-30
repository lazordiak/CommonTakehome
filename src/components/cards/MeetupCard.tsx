import { FC } from "react";

type CardProps = {
  imgSrc: string;
  location: string;
  title: string;
  time: string;
  organizer: string;
};

export const MeetupCard: FC<CardProps> = ({
  imgSrc,
  title,
  location,
  time,
  organizer,
}) => {
  return (
    <div className="w-full h-82 mx-auto bg-white border-2 border-black hover:border-primary cursor-pointer rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-48">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">Hosted by:</span> {organizer}
        </p>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">When:</span> {time}
        </p>
        <p className="mt-2 text-bgCharcoal">
          <span className="font-semibold">Where:</span> {location}
        </p>
      </div>
    </div>
  );
};
