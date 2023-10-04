import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export async function POST(request: Request) {

    const json = await request.json()

    const { alertId, userId } = json
    try {
        // get the alert 

        const alert = await prisma.alert.findUnique({
            where: {
                id: alertId
            }
        })


        if (!alert?.seen.includes(userId)) {
            return NextResponse.json("you have not responded to alert")
        }



        const updateAlert = await prisma.alert.update({
            where: {
                id: alertId
            },
            data: {
                seen: {
                    set: alert.seen.filter(item => item !== userId)
                }
            }
        })

        return NextResponse.json(updateAlert)
    } catch (error: any) {
        console.log(error.message)
    }
}