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

export async function POST(request: NextRequest) {
  console.log("Users - POST");

  const body = await request.json();
  const user = await prisma.user.create({
    data: { id: getRandomId("US"), ...body },
  });
  return NextResponse.json(
    {
      data: user,
    },
    {
      status: 201,
    }
  );
}
