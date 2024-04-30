"use client";

import { MeetupCard } from "@/components/cards/MeetupCard";
import { Meetup } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { MeetupContext } from "./layout";

export default function Collaboration() {
  const router = useRouter();
  const [isMeetups, setIsMeetups] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>();
  const [meetups, setMeetups] = useState<Meetup[]>([]);
  const [collabs, setCollabs] = useState<Meetup[]>([]);
  const { setMeetup } = useContext(MeetupContext);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch("/api/meetups");

        const { data } = await res.json();

        const meetupsArr: Meetup[] = [];
        const collabsArr: Meetup[] = [];
        data.map((event: Meetup) => {
          if (event.category === "collaboration") {
            collabsArr.push(event);
          } else {
            meetupsArr.push(event);
          }
        });
        setMeetups([
          ...meetupsArr,
          ...meetupsArr,
          ...meetupsArr,
          ...meetupsArr,
          ...meetupsArr,
          ...meetupsArr,
        ]);
        setCollabs([
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
          ...collabsArr,
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="max-w-xl">
        <p className="text-4xl font-extrabold mb-12">Meet and Collaborate</p>
        <p className="mb-12">
          Here you can find meetups with like-minded blockchain enthusiasts, or
          find collaborators for new NFT projects! NFTLove is dedicated to
          connecting like-minded enthusiasts from all over the globe --
          we&apos;re sure you&apos;ll find something here!
        </p>
        <div className="mb-12 lg:mb-24">
          <p className="text-3xl font-semibold mb-12">I want to...</p>
          <div className="flex flex-row gap-4">
            <button
              className={`hover:bg-primary font-semibold hover:text-white p-3 border border-primary hover:border-transparent rounded ${
                isMeetups
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
              onClick={() => {
                setIsMeetups(true);
              }}
            >
              Attend Meetups
            </button>
            <button
              className={`hover:bg-primary font-semibold hover:text-white p-3 border border-primary hover:border-transparent rounded ${
                !isMeetups
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
              onClick={() => {
                setIsMeetups(false);
              }}
            >
              Collab on Projects
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center py-24 items-center">
          <FadeLoader loading={loading} color="#4169E1" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {isMeetups
            ? meetups.map((meetup, i) => {
                return (
                  <div
                    onClick={() => {
                      setMeetup(meetup);
                      router.push(`collaboration/${i}`);
                    }}
                    key={i}
                  >
                    <MeetupCard
                      imgSrc="/meetup.jpg"
                      title={meetup.title}
                      time={meetup.time}
                      location={meetup.location}
                      organizer={meetup.organizer}
                    />
                  </div>
                );
              })
            : collabs.map((collab, i) => {
                return (
                  <div
                    onClick={() => {
                      setMeetup(collab);
                      router.push(`collaboration/${i}`);
                    }}
                    key={i}
                  >
                    <MeetupCard
                      imgSrc="/projects.jpg"
                      title={collab.title}
                      time={collab.time}
                      location={collab.location}
                      organizer={collab.organizer}
                    />
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}
