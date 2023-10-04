"use client"


import StatusCards from "@/components/feed/cards";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export default function CommunityDisplay({ params }: { params: { inviteUrl: string } }) {
    const key = `/api/community/${params?.inviteUrl}`

    const { data, isLoading } = useSWR(key, fetcher)


    const post = useSWR('/api/post', fetcher)

    return (
        <div>
            <section className="flex justify-between  mx-4 my-4 items-center">
                <h1 className="text-xl">Welcome to {data?.name} community</h1>
                <Button>Invite Friend</Button>
            </section>
            <StatusCards cardData={post} />

        </div>
    )
}
