import { Button } from "@/components/ui/button"
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import SignalTab from "./signal-tab"
import EventTab from "./events.tab"
import ReportingTab from "./reporting-tab"

export function Extras() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="signals">Signals</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="reporting">Reporting</TabsTrigger>
            </TabsList>
            <TabsContent value="signals">
                <SignalTab />
            </TabsContent>
            <TabsContent value="events">
                <EventTab />
            </TabsContent>
            <TabsContent value="reporting">
                <ReportingTab />
            </TabsContent>
        </Tabs>
    )
}
