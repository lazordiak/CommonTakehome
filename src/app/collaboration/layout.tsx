"use client";

import { Meetup } from "@/types/types";
import { ReactNode, createContext, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const initialMeetupContext = {
  meetup: null,
  setMeetup: () => {},
};

type MeetupContextType = {
  meetup: Meetup | null;
  setMeetup: (meetup: Meetup | null) => void;
};

export const MeetupContext =
  createContext<MeetupContextType>(initialMeetupContext);

export default function Layout({ children }: LayoutProps) {
  const [meetupToPass, setMeetupToPass] = useState<Meetup | null>(null);
  return (
    <MeetupContext.Provider
      value={{ meetup: meetupToPass, setMeetup: setMeetupToPass }}
    >
      {children}
    </MeetupContext.Provider>
  );
}
