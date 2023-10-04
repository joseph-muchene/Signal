import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export async function GET(request: Request, { params }: { params: { communityId: string } }) {
    try {
    
        const { communityId } = params

     
        const response = await prisma.post.findMany({
            where: {
                communityId: communityId
            }
        })

        return NextResponse.json(response)
    } catch (error: any) {
        // throw new Error(error)
    }
}