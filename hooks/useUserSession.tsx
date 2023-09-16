import { LooseObject } from "@utils/helpers";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function useUserSession() {
  const { data } = useSession() as LooseObject;
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.user) {
      setUser({ id: data.id, ...data.user });
    }
  }, [data]);

  return [user, user.id];
}
