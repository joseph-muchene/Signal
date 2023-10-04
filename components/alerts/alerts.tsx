"use client"
import useSWR from 'swr'

import AlertInfo from './alert'
import { fetcher } from '@/lib/fetcher'
import Loading from '../core/loading'

export default function AlertsItems() {
    const { data, isLoading, error } = useSWR('/api/alert', fetcher)




    if (isLoading) {
        return <Loading />
    }


    enum AlertLevel {
        "LOW",
        "MODERATE",
        "HIGH"
    }

    return (
        <div className='flex flex-col md:grid grid-cols-3 gap-3 mt-4'>
            {
                data?.map((value: {

                    "problem": string,
                    "description": string,
                    "alertLevel": AlertLevel,
                    "id": string
                    "seen": string[]

                    profile: {
                        profileImage: string,
                        name: string,
                        id: string,

                    }
                }, key: number) => {
                    return (
                        <AlertInfo value={value} key={key} />
                    )
                })
            }

        </div>
    )
}
