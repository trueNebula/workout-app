import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@utils/prismaDb";
import { getRandomId } from "@utils/helpers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password, email } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const id = getRandomId("US");

  const user = await prisma.user.create({
    data: {
      id,
      username: id,
      email,
      password: hashedPassword,
    },
  });
  return NextResponse.json({
    data: user,
  });
}
