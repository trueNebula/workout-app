"use client";

import { useEffect, useState } from "react";

const HelloPage = () => {
	const [data, setData] = useState("");
	const url = process?.env?.NEXT_PUBLIC_BACKEND_API_URL;
	useEffect(() => {
		const dataFetch = async () => {
			console.log(`${url}/hello`);
			const res = await fetch(`http://${url}/hello`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!res.ok) {
				throw new Error("Failed to fetch resource");
			}
			const data = await res.json();
			setData(await data.message);
		};
		dataFetch();
	}, [url]);

	return <h1>Hello {data}</h1>;
};

export default HelloPage;
