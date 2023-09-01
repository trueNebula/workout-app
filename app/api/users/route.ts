import { PrismaClient } from "@prisma/client";
import { getRandomId } from "@utils/helpers";
import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(request: NextRequest) {
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
  return NextResponse.json({
    code: 200,
    status: "success",
    data: allUsers,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await prisma.users.create({
    data: { id: getRandomId("US"), ...body },
  });
  return NextResponse.json({
    code: 201,
    status: "success",
    data: user,
  });
}
