import Link from "next/link";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { NftSvg } from "./svgs/NftSvg";

const Header = () => {
  return (
    <header className="flex justify-between w-full items-center px-4 lg:px-12 py-6 lg:py-8 bg-white white">
      <div className="text-bgCharcoal flex flex-row items-center text-4xl font-bold">
        <div className="w-10 mr-2">
          <NftSvg />
        </div>
        <Link href={"/"}>NFTLove</Link>
      </div>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
