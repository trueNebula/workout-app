"use client";

import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const url = process?.env?.NEXT_PUBLIC_BACKEND_API_URL;

    const dataFetch = async () => {
      const res = await fetch(`http://${url}/users`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch resource");
      }

      const data = await res.json();
      setUsers(await data.data);
    };
    dataFetch();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user: any) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
