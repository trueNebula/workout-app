"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
      w-10
      h-10
      rounded-full
      bg-th-primary
      text-white
      text-base
      font-bold
      flex
      justify-center
      items-center
      cursor-pointer
    "
    >
      RR
    </div>
  );
};

export default Logo;
