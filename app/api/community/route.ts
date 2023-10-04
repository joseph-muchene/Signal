import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export const dynamic = "force-dynamic"
export async function POST(request: Request) {
    const json = await request.json()
    const { communityName, description, inviteUrl } = json

    try {
        const response = await prisma.community.create({
            data: {
                name: communityName,
                description: description,
                inviteUrl: inviteUrl
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json('An error has occured while creating community')
    }
}

export async function GET() {

    const response = await prisma.community.findMany()

    return NextResponse.json(response)

}