"use client"

import { $Enums, Post, Profile } from "@prisma/client";
import StatusCard from "./status-card";
import { useEffect, useState } from "react";
import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'
import Loading from "../core/loading";



interface Prop {
    cardData: {
        isLoading: boolean,
        data: any
    }
}


interface PostType {


    id: string;
    username: string;
    profileId: string;
    content: string;
    postType: $Enums.PostType;
    media: string | null;
    communityId: string | null;
    createdAt: Date;
    updatedAt: Date;
    user: {

        "profileImage": string,
        "name": string,
    }


}


export default function StatusCards({ cardData }: Prop) {



    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])





    if (cardData.isLoading) {
        return (
            <Loading />
        )
    }

    if (!mounted) return null;
    return (
        <>
            <div className="flex flex-col space-y-4 items-center justify-center mt-4 ">
                {
                    cardData.data?.map((post: PostType) => {
                        return (
                            <StatusCard key={post.id} post={post} />
                        )
                    })
                }

            </div>

        </>
    )
}
