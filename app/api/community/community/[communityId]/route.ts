
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'



export const dynamic = "force-dynamic"
export async function GET(request: Request, { params }: { params: { communityId: string } }) {
    try {
        const { communityId } = params
        const res = await prisma.community.findUnique({
            where: {
                id: communityId
            }
        })


        return NextResponse.json(res)
    } catch (error: any) {
        throw new Error(error)
    }
}