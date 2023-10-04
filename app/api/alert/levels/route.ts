
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export async function GET(request: Request) {

    try {
        const [alert_level_low, alert_level_high, alert_level_moderate] = await Promise.all([
            await prisma.alert.findMany({
                where: {
                    alertLevel: "LOW"
                }
            }),
            await prisma.alert.findMany({
                where: {
                    alertLevel: "HIGH"
                }
            }),
            await prisma.alert.findMany({
                where: {
                    alertLevel: "MODERATE"
                }
            })
        ])

        const analytics = [
            {
                level: "LOW",
                length: alert_level_low.length
            },
            {
                level: "High",
                length: alert_level_high.length
            },
            {
                level: "MODERATE",
                length: alert_level_moderate.length
            }
        ]

        return NextResponse.json(analytics)
    } catch (error: any) {
        console.log(error.message)
    }



}