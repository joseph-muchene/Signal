import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const dynamic = "force-dynamic"
export async function POST(request: Request) {
    const json = await request.json()

    const { communityId, userId } = json
    try {
        const result = await prisma.community.findUnique({
            where: {
                id: communityId
            },

        })
        
        // check if the community does not contain member
        if (result?.members.includes(userId)) {
            return NextResponse.json("member already joined the community")
        }

        const updated = await prisma.community.update({
            where: {
                id: communityId
            },
            data: {
                members: {
                    push: userId
                }
            }
        })


        return NextResponse.json(updated)
    } catch (error) {
        console.log(error)
    }
}