"use client"
import Communities from "@/components/community/communities";
import { useEffect, useState } from "react";

export default function CommunityRoute() {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;
    return (
        <div>
            {/* Display communities */}

            <h1 className="text-2xl my-4 md:mx-16 text-center">
                Communities
            </h1>
            <Communities />
        </div>
    )
}
