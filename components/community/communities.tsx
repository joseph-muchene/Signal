"use client"
import Community from "./community-card";
import { fetcher } from "@/lib/fetcher";
import { Community as CommunityType } from "@prisma/client";

import useSWR from "swr";
import Loading from "../core/loading";

export default function Communities() {


    const { data, isLoading } = useSWR('/api/community', fetcher)



    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="flex flex-col space-y-3 mx-4">
            {/* communities detail view */}
            {data?.map((result: CommunityType) => {
                return (
                    <Community key={result.id} result={result} />
                )
            })}

        </div>
    )
}
