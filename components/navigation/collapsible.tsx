"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CreateCommunity from "../community/create-community"
import { useRouter } from "next/navigation"

export function CollapsibleItem() {
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()



    const redirectToPage = () => {
        return router.push('/community')
    }
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className=" space-y-2"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    Community
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
            <div onClick={redirectToPage} className="cursor-pointer rounded-md border px-4 py-3 font-mono text-sm">
                Community
            </div>

                <CreateCommunity />
            </CollapsibleContent>
        </Collapsible>
    )
}
