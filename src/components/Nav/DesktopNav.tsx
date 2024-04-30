import Link from "next/link";
import { UserSvg } from "../svgs/UserSvg";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex py-4 gap-4 items-center text-lg no-underline black text-bgCharcoal">
      <Link
        className="hover:text-primary font-semibold transition-all"
        href="/"
      >
        Gallery
      </Link>
      <Link
        className="hover:text-primary font-semibold transition-all"
        href="/collaboration"
      >
        Collaboration
      </Link>
      <Link
        className="hover:text-primary font-semibold transition-all"
        href="/forum"
      >
        Forums
      </Link>
      <Link className="hover:text-primary transition-all" href="/user">
        <UserSvg />
      </Link>
    </nav>
  );
};

export default DesktopNav;
