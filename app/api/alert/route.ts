import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


export const dynamic = "force-dynamic"
export async function GET(request: Request) {
    try {
        const response = await prisma.alert.findMany({
            include: {
                profile: true
            }
        })

        return NextResponse.json(response)
    } catch (error) {
        console.log(error)
    }
}



export async function POST(request: Request) {
    const data = await request.json()


    const { problem, description, profileId } = data

    try {
        const res = await prisma.alert.create({
            data: {
                problem,
                description,
                profileId: profileId
            }
        })

        return NextResponse.json(res)
    } catch (error: any) {
        return console.error('ERROR_HAS_OCCURED_WHILE_CREATING_ALERT', error)
    }


}


