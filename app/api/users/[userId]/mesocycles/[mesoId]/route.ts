import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function DELETE(
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
        upsert: body.mesocycle,
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
