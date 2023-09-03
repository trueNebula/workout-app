import { getRandomId } from "@utils/helpers";
import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET() {
  const allMesocycles = await prisma.mesocycle.findMany();
  return NextResponse.json(
    {
      data: allMesocycles,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const mesocycle = await prisma.mesocycle.create({
    data: { id: getRandomId("MS"), ...body },
  });
  return NextResponse.json(
    {
      data: mesocycle,
    },
    {
      status: 201,
    }
  );
}
