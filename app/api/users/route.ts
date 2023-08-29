import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const allUsers = await prisma.users.findMany();
  return NextResponse.json({
    code: 200,
    status: "success",
    data: allUsers,
  });
}
