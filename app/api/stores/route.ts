import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs";
export async function POST(req: Request,
) {
    try {
        // update the code to use clerk for authentication
        const { userId} = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }
    } catch (error) {
        console.log('[STORES_POST', error)
        return new NextResponse("Internal error", {status: 500});
    }

}