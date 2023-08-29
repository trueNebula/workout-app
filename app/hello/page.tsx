"use client";

import { useEffect, useState } from "react";

const HelloPage = () => {
	const [data, setData] = useState("");
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
    };
    dataFetch();
  }, []);

	return <h1>Hello {data}</h1>;
};

export default HelloPage;
