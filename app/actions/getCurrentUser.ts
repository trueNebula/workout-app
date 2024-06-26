import { getServerSession } from "next-auth";
import { authOptions } from "@utils/authOptions";
import prisma from "@utils/prismaDb";
import { LooseObject } from "@utils/helpers";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    // console.log("getCurrUser", session);

    if (!session?.user?.name) {
      return null;
    }

    // session might have the user's name (login) or the id (register)
    // try to find by name, then by id
    const currentUserTemp = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: session.user.name as string,
          },
          {
            id: session.user.name as string,
          },
        ],
      },
    });

    const currentUser = currentUserTemp[0];

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
