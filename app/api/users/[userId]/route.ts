import { NextRequest, NextResponse } from "next/server";
import { default as prisma } from "@utils/prismaDb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - GET id");

  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    console.log("Error: User not found");
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - PATCH");

  const body = await request.json();
  const user = await prisma.user
    .update({
      where: {
        id: params.userId,
      },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    })
    .catch(() => {
      console.log("Error: User not found");
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log("Users - DELETE");

  const user = await prisma.user
    .delete({
      where: {
        id: params.userId,
      },
    })
    .catch(() => {
      console.log("Error: User not found");
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
