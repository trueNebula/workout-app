"use client";

import { useEffect, useState } from "react";

const HelloPage = () => {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const url = process?.env?.NEXT_PUBLIC_BACKEND_API_URL;

    const dataFetch = async () => {
      const res = await fetch(`http://${url}/hello`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch resource");
      }

      const data = await res.json();
      setData(await data.message);
      setId(await data.id);
    };
    dataFetch();
  }, []);

  return (
    <div>
      <h1>Hello {data}</h1>
      <h2>Your random ID is {id}</h2>
    </div>
  );
};

export default HelloPage;
