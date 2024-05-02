"use client";

import { useContext } from "react";
import { MeetupContext } from "../layout";
import Link from "next/link";
import { BackButton } from "@/components/buttons/BackButton";
import { EventDetailsCard } from "@/components/cards/EventDetails";

export default function Page() {
  const { meetup } = useContext(MeetupContext);

  if (!meetup) {
    return <div>Sorry, we couldn&apos;t find your event!</div>;
  }

  return (
    <div className="lg:mx-72">
      <div className="mb-12 flex items-center flex-row">
        <BackButton href="/collaboration" />
        <p className="font-bold ml-6 text-4xl">Event Details</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-2 flex-col">
          <div className="lg:w-1/2">
            <img
              alt="A picture of happy people talking about blockchain"
              src={
                meetup.category === "meetup" ? "/meetup.jpg" : "/projects.jpg"
              }
            />
          </div>
          <h3 className="font-semibold mt-12 text-xl">Description</h3>
          <p className="mt-6">{meetup.description}</p>
        </div>
        <div className="flex mt-12 lg:mt-0 flex-1 flex-col">
          <EventDetailsCard
            location={meetup.location}
            organizer={meetup.organizer}
            time={meetup.time}
          />
        </div>
      </div>
      <div className="items-center my-12 lg:mb-0 lg:mt-24 flex justify-center">
        <div className="lg:max-w-sm">
          <Link
            href="#"
            onClick={(e) => {
              window.location.href = `mailto:${meetup.email}`;
              e.preventDefault();
            }}
          >
            <button
              className={`bg-primary font-semibold text-white p-3 border-transparent rounded`}
            >
              Attend Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
