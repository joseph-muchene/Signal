"use client"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { fetcher } from "@/lib/fetcher"
import { Community } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import useSWR from "swr"
import { Badge } from "../ui/badge"



export default function JoinCommunity({ id, result }: { id: string, result: Community }) {

    const router = useRouter()

    const authData = useSWR('/api/auth', fetcher)

    const user = authData.data
    console.log(user)
    const redirectToCommunity = async (id: string) => {
        const response = await axios.post('/api/community/join', { userId: user.id, communityId: id })
        console.log('HHH')
        if (response.data)
            return router.push(`/community/community/${id}`);
    }

    const checkIfJoined = () => {
        if (!result.members.includes(user?.id)) {
            return false
        } else {
            return true
        }
    }
    const checkIfJoinedHandler = checkIfJoined()


    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-[#000] py-2 px-4 text-white rounded">Proceed</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {checkIfJoinedHandler ? <Badge variant={"secondary"}>Joined</Badge> : "Join community"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        What is happening?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    {checkIfJoinedHandler ? <Button onClick={() => redirectToCommunity(id)}>Continue</Button> : <Button onClick={() => redirectToCommunity(id)}>Agree and Continue</Button>}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

