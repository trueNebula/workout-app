import Link from "next/link";
import BarContainer from "../containers/BarContainer";

import Logo from "./Logo";
import { HiCog6Tooth } from "react-icons/hi2";

const Header = () => {
  return (
    <BarContainer className="bg-th-background" borderPlacement="b">
      <Link href="/">
        <li className="cursor-pointer">
          <Logo />
        </li>
      </Link>
      <Link href="/settings">
        <li className="cursor-pointer">
          <HiCog6Tooth className="w-7 h-7" />
        </li>
      </Link>
    </BarContainer>
  );
};

export default Header;
