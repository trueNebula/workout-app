import { getRandomId } from "@utils/helpers";
import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET() {
  console.log("Users - GET");

  const allUsers = await prisma.user.findMany({
    include: {
      mesocycles: true,
    },
  });
  return NextResponse.json(
    {
      data: allUsers,
    },
    {
      status: 200,
    }
  );
}
