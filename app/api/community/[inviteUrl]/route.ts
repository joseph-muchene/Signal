import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"




export const dynamic = "force-dynamic"
export async function GET(request: Request, { params }: { params: { inviteUrl: string } }) {

    try {
        const inviteUrl = params.inviteUrl
        const response = await prisma?.community.findFirst({
            where: {
                inviteUrl: inviteUrl
            }
        })
     
        return NextResponse.json(response)


    } catch (error: any) {
        if (error.code === "P2025") {
            let error_response = {
                status: "fail",
                message: "No Feedback with the Provided ID Found",
            };
            return new NextResponse(JSON.stringify(error_response), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

    }
}