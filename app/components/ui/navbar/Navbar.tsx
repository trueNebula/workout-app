import Container from "../Container";
import Logo from "./Logo";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-th-background z-10 shadow-sm">
      <div
        className="
      py-4
      border-b-[1px]
      "
      >
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <div>lmao</div>
            <BiUserCircle />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
