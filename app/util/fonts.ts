import { Acme, Lunasima } from "next/font/google";
import { Figtree } from "next/font/google";

export const testFont = Acme({
  weight: "400",
  preload: false,
});

export const textFont = Lunasima({
  weight: "400",
  preload: false,
});

export const headingFont = Figtree({
  subsets: ["latin"],
});
