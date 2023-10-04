import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
export default function EventTab() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Events</CardTitle>
                <CardDescription>
                    Check here upcoming events
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <h1>Fundraiser</h1>
                <div className="flex">
                    <div><p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure. Beatae ut nostrum explicabo impedit, inventore amet earum dolores qui!
                    </p>
                    </div>
                    <div className="flex flex-col p-4 bg-gray-500 items-center rounded text-white">
                        <p>13</p>
                        <p>Mon</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Take part</Button>
            </CardFooter>
        </Card>
    )
}
