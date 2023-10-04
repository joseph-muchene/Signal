"use client"

import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"


export default function InitialWelcomeCard() {


    const { data } = useSWR('/api/auth', fetcher)


    return (
        <div className="flex flex-col space-y-3 bg-[#fff] p-4 rounded">
            <h2 className="text-xl font-semibold">Welcome {data?.name}</h2>
            <p>Whats new with you? Would like to share something with the community?😊</p>
        </div>
    )
}
