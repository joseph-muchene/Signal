
import AvatarComponent from "@/components/avatar"
import { Badge } from "@/components/ui/badge"
import useSWRMutation from 'swr/mutation'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { fetcher } from "@/lib/fetcher"
import { Alert } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import useSWR, { mutate, useSWRConfig } from "swr"

enum AlertLevel {
    "LOW",
    "MODERATE",
    "HIGH"
}


interface Prop {
    value: {
        "problem": string,
        "description": string,
        "alertLevel": AlertLevel,
        "id": string,
        seen: string[]

        profile: {
            profileImage: string,
            name: string,
            id: string,

        }
    }

}




export default function AlertInfo({ value }: Prop) {

    const authData = useSWR('/api/auth', fetcher,)
    const { mutate } = useSWRConfig()


    let userId = authData.data?.userId

    async function acknowledgeAlert(respondedNum: any) {
        let alertId = value.id
        let alertLevel: string
        let defaultLevel: string = "LOW"
        await axios.post('/api/alert/acknowledge', { userId, alertId })

        if (respondedNum.seen.length === 0 && respondedNum.seen.length <= 9) {
            // have the danger level to be moderate
            alertLevel = "MODERATE"
            await axios.post('/api/alert/increase/level', { alertId, alertLevel })

        } else if (respondedNum.seen.length >= 10) {
            alertLevel = "HIGH"
            // have the danger level to be high
            await axios.post('/api/alert/increase/level', { alertId, alertLevel })

        } else if (respondedNum.seen.length <= 1) {

            // have the danger level to be high
            await axios.post('/api/alert/increase/level', { alertId, alertLevel: defaultLevel })

        }
        window.location.reload()
    }


    async function dismissAlert() {
        let alertId = value.id

        await axios.post('/api/alert/dismiss', { userId, alertId })

        window.location.reload()
    }

    function checkIfAcknowledged() {
        const isFound = value.seen.find(val => val === userId)

        if (isFound === undefined) return false

        return true
    }

    const isAcknowledged = checkIfAcknowledged()


    const checkBadge = (value: any) => {
        if (value.alertLevel.toString() == "LOW") {
            return (
                <Badge variant="secondary">{value.alertLevel}</Badge>
            )
        }

        if (value.alertLevel.toString() == "MODERATE") {
            return (
                <Badge variant="default">{value.alertLevel}</Badge>
            )
        }

        if (value.alertLevel.toString() == "HIGH") {
            return (
                <Badge variant="destructive">{value.alertLevel}</Badge>
            )
        }
    }




    return (
        <Card>
            <CardHeader>
                <div className="flex space-x-2 items-center ">
                    <div >
                        <div className="flex justify-between">
                            <AvatarComponent profile={value.profile} />

                        </div>
                    </div>
                    <div>
                        <CardTitle>{value.problem}</CardTitle>


                        <p className=" mt-3">responded  {value.seen.length}</p>

                        {checkBadge(value)}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p>
                    {value.description}
                </p>
            </CardContent>
            <CardFooter className="flex space-x-4">
                <Button disabled={!isAcknowledged} onClick={dismissAlert} variant="outline">Dismiss</Button>

                {!isAcknowledged && (<Button className="bg-blue-600 text-white" onClick={() => acknowledgeAlert(value)}>Acknowledge</Button>)}

            </CardFooter>
        </Card>

    )
}
