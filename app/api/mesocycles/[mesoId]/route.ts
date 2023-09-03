import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { mesoId: string } }
) {
  console.log("Mesocycles - GET id");

  const mesocycle = await prisma.mesocycle.findUnique({
    where: {
      id: params.mesoId,
    },
  });

  if (!mesocycle) {
    console.log("Error: Mesocycle not found");
    return NextResponse.json(
      {
        data: "Mesocycle not found",
      },
      {
        status: 422,
      }
    );
  }

  NextResponse.json(
    {
      data: mesocycle,
    },
    {
      status: 200,
    }
  );
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { mesoId: string } }
) {
  console.log("Mesocycles - PATCH");

  const body = await request.json();
  const mesocycle = await prisma.mesocycle
    .update({
      where: {
        id: params.mesoId,
      },
      data: {
        description: body.description,
      },
    })
    .catch(() => {
      console.log("Error: Mesocycle not found");
    });

  if (!mesocycle) {
    return NextResponse.json(
      {
        data: "Mesocycle not found",
      },
      {
        status: 422,
      }
    );
  }

  return NextResponse.json(
    {
      data: mesocycle,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { mesoId: string } }
) {
  console.log("Mesocycles - DELETE");

  const mesocycle = await prisma.mesocycle
    .delete({
      where: {
        id: params.mesoId,
      },
    })
    .catch(() => {
      console.log("Error: Mesocycle not found");
    });

  if (!mesocycle) {
    return NextResponse.json(
      {
        data: "Mesocycle not found",
      },
      {
        status: 422,
      }
    );
  }

  return NextResponse.json(
    {
      data: mesocycle,
    },
    {
      status: 200,
    }
  );
}
