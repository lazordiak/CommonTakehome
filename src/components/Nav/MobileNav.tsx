"use client";

import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger color="black" toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 right-0 pt-0 bg-white text-lg border-t border-t-white text-bgCharcoal font-semibold"
        >
          <ul className="grid gap-2">
            <li className="w-full border-b border-b-bgCharcoal">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className={"flex items-center justify-between w-full p-5"}
                href={"/"}
              >
                <span className="flex text-md">Gallery</span>
              </Link>
            </li>
            <li className="w-full border-b border-b-bgCharcoal">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className={"flex items-center justify-between w-full p-5"}
                href={"/collaboration"}
              >
                <span className="flex text-md">Get Involved</span>
              </Link>
            </li>
            <li className="w-full bg-white border-b border-b-bgCharcoal">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className={"flex items-center justify-between w-full p-5"}
                href={"/forum"}
              >
                <span className="flex text-md">Forum</span>
              </Link>
            </li>
            <li className="w-full bg-white border-b border-b-bgCharcoal">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className={"flex items-center justify-between w-full p-5"}
                href={"/user"}
              >
                <span className="flex text-md">Profile</span>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
