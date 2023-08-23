import { NextResponse } from "next/server";

export async function GET(request: Request) {
	return NextResponse.json({
		message: "there!",
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
