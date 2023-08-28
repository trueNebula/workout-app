"use client";
import { useEffect, useState } from "react";
import { headingFont, textFont } from "./util/fonts";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="px-80">
      <div className="h-100 w-100 grid place-items-center text-5xl pt-10 mb-20">
        <h1
          className={`${headingFont.className} text-th-text text-7xl font-bold`}
        >
          Title Bar
        </h1>
        <div className={`${textFont.className} text-th-text`}>Hello World</div>
        <button
          className={`${headingFont.className} text-th-text font-medium`}
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Swap Theme
        </button>
      </div>
      <div className="ml-80 w-80 h-80 rounded bg-th-primary"></div>
      <div className="pr-40 my-20 flex justify-between items-center w-100 h-40">
        <div className="bg-th-secondary w-40 h-40 rounded-full"></div>
        <div className="bg-th-accent w-60 h-60 rounded-lg"></div>
      </div>
    </div>
  );
}
