import { NextResponse } from "next/server";

export async function GET(request: Request) {
	return NextResponse.json({
		message: "world!",
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
