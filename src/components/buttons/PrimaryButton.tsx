import { FC } from "react";

type PrimaryButtonProps = {
  hasHover?: boolean;
  text: string;
  onClick: () => void;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  onClick,
  hasHover,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        hasHover
          ? "hover:bg-primary hover:border-transparent hover:text-white"
          : "bg-primary text-white"
      } font-semibold  py-1 px-2 border border-primary rounded w-full`}
    >
      {text}
    </button>
  );
};
