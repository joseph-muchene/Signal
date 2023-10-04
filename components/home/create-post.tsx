"use client"
import useSWR from "swr";
import FormPost from "./Form-post";
import { fetcher } from "@/lib/fetcher";


export default function CreatePost({ isCommunity, communityId }: {isCommunity:boolean, communityId:string}) {
    const { data } = useSWR('/api/auth', fetcher)
    return (
        <div className="mx-4">
            <FormPost user={data} isCommunity={isCommunity} communityId={communityId} />
        </div>
    )
}
