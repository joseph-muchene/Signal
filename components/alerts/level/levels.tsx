"use client"
import useSWR from 'swr'
import AlertLevel from './level'
import { fetcher } from '@/lib/fetcher'

export default function AlertLevels() {
    const { data } = useSWR('/api/alert/levels', fetcher)

    return (
        <div className='flex flex-col  md:grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-16 gap-2 mt-3'>

            {data?.map((value: any) => {
                return (
                    <AlertLevel key={value.id} value={value} />
                )
            })}


        </div>
    )
}
