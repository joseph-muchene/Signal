import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs'

export const dynamic = "force-dynamic"
export async function GET(request: Request, { params }: { params: { userId: string } }) {
    const account = auth()
    let newId: any = account.userId

    const response = await prisma.profile.findUnique({
        where: {
            userId: newId
        }
    })

    return NextResponse.json(response)
}