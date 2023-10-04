"use client"
import StatusCards from "@/components/feed/cards"
import CreatePost from "@/components/home/create-post"

import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"



export default function JoinCommunity({ params }: { params: { communityId: string } }) {
    const { communityId } = params

    const cardData = useSWR(`/api/post/community/${communityId}`, fetcher)


    return (
        <section>

            <CreatePost isCommunity={true} communityId={communityId} />
            <StatusCards cardData={cardData} />
        </section>
    )
}

