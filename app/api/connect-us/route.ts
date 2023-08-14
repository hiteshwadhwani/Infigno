import client from "@/lib/primsadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email } = await req.json();
    if (!name || !phone || !email) {
      return new NextResponse("some fields are missing", { status: 400 });
    }
    const ConnectUs = await client.connectUs.create({
      data: {
        name,
        phone,
        email,
      },
    });
    return NextResponse.json(ConnectUs, {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    console.log("CONNECT_US[POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
