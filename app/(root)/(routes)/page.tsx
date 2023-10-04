"use client"
import StatusCards from '@/components/feed/cards'
import CreatePost from '@/components/home/create-post'
import InitialWelcomeCard from '@/components/home/initial-welcome-card'
import { fetcher } from '@/lib/fetcher'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const dynamic = 'force-dynamic'
export default function Home() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const cardData = useSWR('/api/post', fetcher,)

  const authData = useSWR('/api/auth', fetcher,)


  
  if (!mounted) return <></>;
  return (
    <div className='mt-16 '>
      <section>
        <h1>
          <InitialWelcomeCard />
        </h1>
      </section>

      <section>
        <CreatePost isCommunity={false} communityId="" />
      </section>

      <section>

        <StatusCards cardData={cardData} />
      </section>

    </div>
  )
}
