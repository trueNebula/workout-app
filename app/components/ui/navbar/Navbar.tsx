"use client";

import Link from "next/link";
import BarContainer from "../containers/BarContainer";
import { BiSolidUserCircle, BiDumbbell } from "react-icons/bi";
import { BsTrophyFill } from "react-icons/bs";
import SelectableContainer from "../containers/SelectableContainer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const path = usePathname();

  useEffect(() => {
    setCurrentPage(path);
  }, [path]);

  return (
    <BarContainer className="fixed inset-x-0 bottom-0" borderPlacement="t">
      <Link href="/dashboard" prefetch={true}>
        <SelectableContainer selected={currentPage === "/dashboard"}>
          <BsTrophyFill className="w-7 h-7" />
        </SelectableContainer>
      </Link>
      <Link href="/mesocycle" prefetch={true}>
        <SelectableContainer selected={currentPage === "/mesocycle"}>
          <BiDumbbell className="w-7 h-7" />
        </SelectableContainer>
      </Link>
      <Link href="/profile" prefetch={true}>
        <SelectableContainer selected={currentPage === "/profile"}>
          <BiSolidUserCircle className="w-7 h-7" />
        </SelectableContainer>
      </Link>
    </BarContainer>
  );
};

export default NavBar;
