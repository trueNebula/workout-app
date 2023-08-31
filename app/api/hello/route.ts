import { NextResponse } from "next/server";
import { getRandomId } from "@utils/helpers";

export async function GET(request: Request) {
  const randomId = getRandomId("HL");
  return NextResponse.json({
    message: "there!",
    id: randomId,
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
