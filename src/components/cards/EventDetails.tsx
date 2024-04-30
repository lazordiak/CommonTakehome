import { FC } from "react";

type EventDetailsCardProps = {
  location: string;
  time: string;
  organizer: string;
};

export const EventDetailsCard: FC<EventDetailsCardProps> = ({
  location,
  time,
  organizer,
}) => {
  return (
    <div>
      <div className="bg-white flex flex-row lg:w-72 p-4 shadow-lg border-2 border-black rounded">
        <img className="max-w-12 rounded-full mr-4" src="/happyguy.jpg" />
        <div className="flex flex-col">
          <p className="font-semibold">Organized by </p>
          <p>{organizer}</p>
        </div>
      </div>
      <div className="bg-white mt-6 lg:w-72 p-4 shadow-lg border-2 border-black rounded">
        <p>
          <span className="font-semibold">Location: </span>
          {location}
        </p>
        <p>
          <span className="font-semibold">Time: </span>
          {time}
        </p>
      </div>
    </div>
  );
};
