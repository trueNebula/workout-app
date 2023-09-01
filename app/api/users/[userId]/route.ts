import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const user = await prisma.users.findFirst({
    where: {
      id: params.userId,
    },
  });
  return NextResponse.json({
    code: 200,
    status: "success",
    data: user,
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const body = await request.json();
  const user = await prisma.users.update({
    where: {
      id: params.userId,
    },
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });
  return NextResponse.json({
    code: 200,
    status: "success",
    data: user,
  });
}

export async function DELETE({ params }: { params: { userId: string } }) {
  const user = await prisma.users.delete({
    where: {
      id: params.userId,
    },
  });
  return NextResponse.json({
    code: 200,
    status: "success",
    data: user,
  });
}
