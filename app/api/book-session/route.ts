import client from "@/lib/primsadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, profession } = await req.json();
    if (!name || !phone || !email || !profession) {
      return new NextResponse("some fields are missing", { status: 400 });
    }
    const bookSession = await client.session.create({
      data: {
        name,
        phone,
        email,
        profession,
      },
    });
    return NextResponse.json(bookSession, {
      status: 200,
      statusText: "session booked",
    });
  } catch (error) {
    console.log("BOOL-SESSION[POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
