"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Community } from "@prisma/client"
import { Button } from "@/components/ui/button"
import JoinCommunity from "./Join-community"



interface Prop {
    result: Community
}
export default function Community({ result }: Prop) {

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{result.name}</CardTitle>

                </CardHeader>
                <CardContent>
                    <p>{result.description}</p>
                </CardContent>
                <CardFooter>
                    <JoinCommunity id={result?.id} result={result} />
                </CardFooter>
            </Card>

        </div>
    )
}
