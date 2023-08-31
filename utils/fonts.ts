import { Acme, Lunasima, Mandali } from "next/font/google";
import { Figtree } from "next/font/google";

export const testFont = Acme({
  weight: "400",
  preload: false,
});

export const textFont = Mandali({
  weight: "400",
  preload: false,
});

export const headingFont = Figtree({
  weight: "700",
  subsets: ["latin"],
});
