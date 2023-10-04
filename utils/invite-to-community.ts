import { useRouter } from 'next/navigation'



export default function inviteUrl() {
    const router = useRouter()

    const inviteUrlFunc = (id: string) => {

   
       router.push(`${window.location.origin}/community/community/${id}`)

       window.location.reload()
        
    }
    return inviteUrlFunc

}