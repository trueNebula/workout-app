"use client";

import { Button } from "@components/shadcn/ui/button";
import { headingFont } from "@utils/fonts";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className={`${headingFont.className} text-xs font-bold flex gap-2`}
    >
      <FcGoogle />
      LOG IN WITH GOOGLE
    </Button>
  );
}
