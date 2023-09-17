"use client";

import Link from "next/link";
import BarContainer from "../containers/BarContainer";
import SelectableContainer from "../containers/SelectableContainer";

import Logo from "./Logo";
import { HiCog6Tooth } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("");
  const path = usePathname();

  useEffect(() => {
    setCurrentPage(path.slice(1));
  }, [path]);

  return (
    <BarContainer className="bg-th-background" borderPlacement="b">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/settings">
        <SelectableContainer selected={currentPage === "settings"}>
          <HiCog6Tooth className="w-7 h-7" />
        </SelectableContainer>
      </Link>
    </BarContainer>
  );
};

export default Header;
