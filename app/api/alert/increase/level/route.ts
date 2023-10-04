import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export async function POST(request: Request) {
    const json = await request.json()

    const { alertId, alertLevel } = json
    try {
        const updateAlertLevel = await prisma.alert.update({
            where: {
                id: alertId
            }, data: {
                alertLevel: alertLevel
            }
        })

        return NextResponse.json(updateAlertLevel)
    } catch (error: any) {
        console.log(error)
    }
}