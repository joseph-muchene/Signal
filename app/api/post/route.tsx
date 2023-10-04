import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic"
export async function POST(request: Request,) {
    try {
        const json = await request.json();

        const newPost = await prisma.post.create({
            data: json
        })

        return NextResponse.json(newPost)
    } catch (error) {
        console.log(error)
        throw new Error("An error occured")
    }
}


export async function GET() {
    try {
        const data = await prisma.post.findMany({
            include: {
                user: true
            }
        })
        return NextResponse.json(data)
    } catch (error) {
        throw new Error("An error occured")
    }
}