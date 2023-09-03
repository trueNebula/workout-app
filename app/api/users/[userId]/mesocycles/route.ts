import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - GET - Mesocycles");

  const mesocycles = await prisma.user.findFirst({
    where: {
      id: params.userId,
    },
    select: {
      mesocycles: true,
    },
  });

  if (!mesocycles) {
    return NextResponse.json(
      {
        data: "User not found",
      },
      {
        status: 422,
      }
    );
  }

  return NextResponse.json(
    {
      data: mesocycles,
    },
    {
      status: 200,
    }
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - POST - Mesocycles");

  const body = await request.json();
  const user = await prisma.user.update({
    where: {
      id: params.userId,
    },
    data: {
      mesocycles: {
        connect: {
          id: body.mesocycle,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        data: "User not found",
      },
      {
        status: 422,
      }
    );
  }

  return NextResponse.json(
    {
      data: user,
    },
    {
      status: 200,
    }
  );
}
