import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - GET Unique");

  const count = await prisma.user.count({
    where: {
      username: params.userId,
    },
  });

  const isUnique = count === 0;

  return NextResponse.json(
    {
      data: isUnique,
    },
    {
      status: 200,
    }
  );
}
