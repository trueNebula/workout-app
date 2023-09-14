import { getServerSession } from "next-auth";
import { authOptions } from "@api/auth/[...nextauth]/route";
import prisma from "@utils/prismaDb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.name) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        username: session.user.name as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
