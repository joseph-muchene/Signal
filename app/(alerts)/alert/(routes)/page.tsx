"use client"

import AlertLevels from "@/components/alerts/level/levels";
import HeaderAlert from "@/components/alerts/header-alert";
import AlertsItems from "@/components/alerts/alerts";
import { useEffect, useState } from "react";
export default function AlertPage() {


    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;
    return (
        <div>
            <div>
                <HeaderAlert />
            </div>
            <div>
                <AlertLevels />
            </div>

            <div>
                <AlertsItems />
            </div>
        </div>
    )
}
