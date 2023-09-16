import Link from "next/link";
import BarContainer from "../containers/BarContainer";
import { BiSolidUserCircle, BiDumbbell } from "react-icons/bi";
import { BsTrophyFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <BarContainer className="fixed inset-x-0 bottom-0" borderPlacement="t">
      <Link href="/dashboard" prefetch={true}>
        <li className="cursor-pointer">
          <BsTrophyFill className="w-7 h-7" />
        </li>
      </Link>
      <Link href="/mesocycle" prefetch={true}>
        <li className="cursor-pointer">
          <BiDumbbell className="w-7 h-7" />
        </li>
      </Link>
      <Link href="/profile" prefetch={true}>
        <li className="cursor-pointer">
          <BiSolidUserCircle className="w-7 h-7" />
        </li>
      </Link>
    </BarContainer>
  );
};

export default NavBar;
