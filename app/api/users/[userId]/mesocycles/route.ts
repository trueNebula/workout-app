import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log(params.userId);
  const mesocycles = await prisma.users.findFirst({
    where: {
      id: params.userId,
    },
    select: {
      mesocycles: true,
    },
  });
  console.log(mesocycles);
  return NextResponse.json({
    code: 200,
    status: "success",
    data: mesocycles,
  });
}
