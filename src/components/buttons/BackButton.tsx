import Link from "next/link";
import { FC } from "react";
import { BackSvg } from "../svgs/BackSvg";

type BackButtonProps = {
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <BackSvg />
    </Link>
  );
};
